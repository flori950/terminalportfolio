# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### 1. **DO NOT** create a public issue

### 2. Send a detailed report to: florian.jaeger1@freenet.de

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### 3. Response Timeline

- **Initial response**: Within 24-48 hours
- **Status update**: Within 1 week
- **Resolution target**: Within 30 days for critical issues

### 4. Recognition

We believe in responsible disclosure and will:
- Credit you in the security advisory (with your permission)
- Provide updates on the fix progress
- Notify you when the issue is resolved

## Security Measures Implemented

### Client-Side Protection
- Rate limiting (60 requests/minute)
- Bot detection and logging
- Content Security Policy (CSP)
- XSS protection headers

### SEO Protection
- Comprehensive robots.txt
- Crawl delay enforcement
- Aggressive bot blocking
- AI scraper protection

### Infrastructure Recommendations
- Use HTTPS only
- Implement server-side rate limiting
- Deploy behind a CDN with DDoS protection
- Regular security audits

## Security Headers

The following security headers are implemented:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

## Bot Protection

### Blocked User Agents
- Aggressive crawlers (AhrefsBot, MJ12bot, etc.)
- AI scrapers (GPTBot, ChatGPT-User, Claude-Web)
- Archive bots (ia_archiver, archive.org_bot)
- SEO tools (SemrushBot, DataForSeoBot)

### Allowed Crawlers
- Google (Googlebot)
- Bing (Bingbot)
- Social media (Facebook, Twitter, LinkedIn)
- Search engines with rate limits

## Monitoring

### Recommended Monitoring
- Failed rate limit attempts
- CSP violation reports
- Suspicious user agent patterns
- Unusual traffic spikes

### Log Analysis
- Monitor for repeated 429 responses
- Track blocked bot attempts
- Analyze geographic request patterns
- Review error rates and response times

## Incident Response

### High Severity (Critical vulnerabilities)
1. Immediate assessment within 2 hours
2. Temporary mitigation within 4 hours
3. Full patch within 24 hours
4. Public disclosure after fix deployment

### Medium Severity
1. Assessment within 24 hours
2. Fix within 1 week
3. Scheduled deployment

### Low Severity
1. Assessment within 1 week
2. Fix in next regular update

## Contact

- **Security Email**: florian.jaeger1@freenet.de
- **PGP Key**: Available on request
- **Response Language**: English, German

Thank you for helping keep this project secure!
