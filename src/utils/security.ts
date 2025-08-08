/**
 * Security utilities for bot detection and rate limiting
 */

interface WindowWithAutomation {
  webdriver?: boolean;
  domAutomation?: boolean;
  domAutomationController?: boolean;
}

interface NavigatorWithWebdriver {
  webdriver?: boolean;
}

interface BotDetectionResult {
  isBot: boolean;
  confidence: number;
  reasons: string[];
}

interface RateLimitState {
  count: number;
  lastReset: number;
  isBlocked: boolean;
}

export class SecurityManager {
  private static readonly RATE_LIMIT_WINDOW = 60000; // 1 minute
  private static readonly MAX_REQUESTS_PER_WINDOW = 60;
  private static readonly STORAGE_KEY = 'security_state';
  
  /**
   * Check if user is rate limited
   */
  static checkRateLimit(): boolean {
    try {
      const state = this.getRateLimitState();
      const now = Date.now();
      
      // Reset window if expired
      if (now - state.lastReset > this.RATE_LIMIT_WINDOW) {
        this.resetRateLimit();
        return false;
      }
      
      // Check if already blocked
      if (state.isBlocked) {
        return true;
      }
      
      // Increment counter
      const newCount = state.count + 1;
      
      // Check if limit exceeded
      if (newCount > this.MAX_REQUESTS_PER_WINDOW) {
        this.setBlocked(true);
        return true;
      }
      
      // Update state
      this.updateRateLimitState({
        ...state,
        count: newCount
      });
      
      return false;
    } catch (error) {
      console.warn('Rate limit check failed:', error);
      return false;
    }
  }
  
  /**
   * Detect potential bot activity
   */
  static detectBot(): BotDetectionResult {
    let score = 0;
    const reasons: string[] = [];
    
    // Check for missing referrer (direct access)
    if (!document.referrer && !window.opener) {
      score += 0.1;
      reasons.push('No referrer header');
    }
    
    // Check for headless browser indicators
    const windowExt = window as unknown as WindowWithAutomation;
    const navExt = navigator as unknown as NavigatorWithWebdriver;
    
    if (windowExt.webdriver || 
        navExt.webdriver || 
        windowExt.domAutomation ||
        windowExt.domAutomationController) {
      score += 0.9;
      reasons.push('Automation tools detected');
    }
    
    // Check for unusual screen dimensions
    if (screen.width === 0 || screen.height === 0) {
      score += 0.4;
      reasons.push('Invalid screen dimensions');
    }
    
    // Check for missing plugins
    if (navigator.plugins.length === 0) {
      score += 0.2;
      reasons.push('No browser plugins');
    }
    
    const confidence = Math.min(score, 1);
    const isBot = confidence > 0.7;
    
    return { isBot, confidence, reasons };
  }

  /**
   * Initialize security checks
   */
  static initialize(): void {
    // Check rate limiting
    if (this.checkRateLimit()) {
      this.showRateLimitError();
      return;
    }
    
    // Bot detection
    const botDetection = this.detectBot();
    if (botDetection.isBot) {
      this.logBotActivity(botDetection);
      // Optional: Take action against bots
      // this.handleBotDetection(botDetection);
    }
    
    // Log legitimate access
    this.logAccess();
  }
  
  private static getRateLimitState(): RateLimitState {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to read rate limit state:', error);
    }
    
    return {
      count: 0,
      lastReset: Date.now(),
      isBlocked: false
    };
  }
  
  private static updateRateLimitState(state: RateLimitState): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Failed to update rate limit state:', error);
    }
  }
  
  private static resetRateLimit(): void {
    this.updateRateLimitState({
      count: 1,
      lastReset: Date.now(),
      isBlocked: false
    });
  }
  
  private static setBlocked(blocked: boolean): void {
    const state = this.getRateLimitState();
    this.updateRateLimitState({
      ...state,
      isBlocked: blocked
    });
  }
  
  private static showRateLimitError(): void {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1e1e1f;
        color: #ffdb70;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        font-family: 'IBM Plex Mono', monospace;
      ">
        <h1>Rate Limit Exceeded</h1>
        <p>Too many requests. Please wait before trying again.</p>
        <p>If you're not a bot, please wait a moment and refresh the page.</p>
      </div>
    `;
    document.body.appendChild(errorDiv);
    throw new Error('Rate limit exceeded');
  }
  
  private static logBotActivity(detection: BotDetectionResult): void {
    console.warn('Potential bot activity detected:', {
      confidence: detection.confidence,
      reasons: detection.reasons,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }
  
  private static logAccess(): void {
    console.info('Legitimate access logged:', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });
  }
}

/**
 * Content Security Policy utilities
 */
export class CSPManager {
  static readonly policies = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https:"],
    frameAncestors: ["'none'"],
    baseSrc: ["'self'"],
    formAction: ["'self'"]
  };
  
  static generateCSPHeader(): string {
    const policies = Object.entries(this.policies)
      .map(([directive, sources]) => {
        const kebabCase = directive.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${kebabCase} ${sources.join(' ')}`;
      })
      .join('; ');
    
    return policies;
  }
}
