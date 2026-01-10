# Kernel Craze Website Redesign 🍿

> **"Every Bag Brings Henderson Together"**

A complete website reimagination for Kernel Craze, a gourmet popcorn company founded by Stephen Wolf in Henderson, NC. This redesign transforms the site from a generic e-commerce store into a community-driven movement.

## 📁 Project Structure

```
kernel-craze-redesign/
├── index.html                    # Homepage
├── css/
│   └── styles.css               # Complete design system & styles
├── js/
│   └── main.js                  # Interactive functionality
├── pages/
│   ├── our-story.html           # Stephen's full narrative journey
│   ├── shop.html                # Product catalog with impact framing
│   ├── fundraising.html         # 50% fundraising program
│   └── henderson-pride.html     # Community impact gallery
├── emails/
│   ├── welcome-series.html      # Newsletter welcome sequence
│   └── order-confirmation.html  # Post-purchase email
├── docs/
│   └── plan.md                  # Implementation checklist
├── KERNEL-CRAZE-REIMAGINED.md   # Strategic overview document
└── README.md                    # This file
```

## 🎨 Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-butter` | #F5D547 | Primary accent, CTAs |
| `--color-caramel` | #C4733B | Secondary accent |
| `--color-kernel` | #2D2926 | Text, dark backgrounds |
| `--color-warm-white` | #FDF8F3 | Page backgrounds |
| `--color-heart` | #E63946 | Urgency, important CTAs |
| `--color-growth` | #2D6A4F | Success, community |

### Typography

- **Display**: Playfair Display (headings)
- **Body**: Inter (content)
- **Accent**: Caveat (handwritten feel)

### Key Components

- Fluid typography (responsive scaling)
- Scroll-triggered animations
- Mobile-first navigation
- Product cards with impact badges
- Fundraising calculator
- Timeline component
- Gallery grid

## 🚀 Quick Start

1. **Local Preview**
   ```bash
   cd ~/Projects/kernel-craze-redesign
   python -m http.server 8000
   # Open http://localhost:8000
   ```

2. **Or use Live Server in VS Code**
   - Install Live Server extension
   - Right-click `index.html` → "Open with Live Server"

## 📱 Pages Overview

### Homepage (`index.html`)
- Emotional hero with community-first messaging
- Mission strip (Community First / 30+ Flavors / Henderson Born)
- Featured products with impact badges
- Fundraising preview (50% highlight)
- Stephen's story preview
- Social proof / press section
- Arts competition winners spotlight
- Newsletter signup

### Our Story (`pages/our-story.html`)
- Full 5-chapter narrative of Stephen Wolf's journey
- Henderson memories → Leaving → Ohio revelation → Return → Vision
- Timeline of milestones
- Emotional pull quotes

### Shop (`pages/shop.html`)
- Product grid with category filters
- Impact messaging throughout
- Size guide
- Bulk order CTA

### Fundraising (`pages/fundraising.html`)
- "50% Back" hero
- Math comparison (industry vs Kernel Craze)
- 4-step process visualization
- Perfect for: Schools, Churches, Teams, Causes
- Feature highlights
- Sign-up form

### Henderson Pride (`pages/henderson-pride.html`)
- Impact counters
- Arts competition winners spotlight
- Community gallery
- Partner acknowledgments
- Vision for Henderson's future

## 💌 Email Templates

### Welcome Series (`emails/welcome-series.html`)
4-email sequence:
1. Welcome + 10% code (immediate)
2. Why Henderson Matters (day 2)
3. Your First Order (day 5)
4. Fundraising intro (day 10)

### Order Confirmation (`emails/order-confirmation.html`)
- Impact messaging
- Order details
- Shipping info
- Share CTA

## ✨ Key Features

- **Responsive Design**: Mobile-first, works on all devices
- **Scroll Animations**: Elements animate as they enter viewport
- **Product Filtering**: Filter by category (savory, sweet, seasonal, tins)
- **Counter Animations**: Impact numbers animate when visible
- **Form Handling**: Newsletter and fundraiser forms with feedback
- **Cart Preview**: Visual feedback when adding products

## 🎯 Strategic Goals

1. **Lead with Story**: Stephen's journey front and center
2. **Community > Commerce**: Every purchase = community investment
3. **Clear CTAs**: "Shop & Support Henderson" not just "Shop Now"
4. **Social Proof**: Awards, press, testimonials visible
5. **50% Fundraising**: Industry-leading program highlighted
6. **Local Pride**: Henderson mentioned throughout

## 📊 Psychology Principles Applied

- **Emotional Hook**: Story before products
- **Social Proof**: Awards, press, testimonials
- **Reciprocity**: Community gives back → you want to give
- **Scarcity**: Limited seasonal flavors
- **Identity**: "Kernel Crew" creates belonging
- **Purpose**: Every purchase has meaning

## 🔧 Implementation Notes

### For Shopify Integration
1. Convert HTML to Liquid templates
2. Map product data to template variables
3. Connect forms to Shopify/Klaviyo
4. Set up actual cart functionality
5. Configure checkout with impact messaging

### Recommended Shopify Apps
- Klaviyo (email marketing)
- Smile.io (loyalty/referrals)
- Fundraise Up or similar (fundraising management)
- Loox or Judge.me (reviews)

### SEO Checklist
- [x] Meta descriptions on all pages
- [x] Semantic HTML structure
- [x] Open Graph tags
- [x] Mobile responsive
- [ ] Add Schema.org markup
- [ ] Configure sitemap
- [ ] Set up Google Analytics

## 📝 Content Needed

Before full deployment, gather:
- [ ] High-quality photos of Stephen
- [ ] Community event photos
- [ ] Product photography
- [ ] Customer testimonials
- [ ] Fundraiser success stories
- [ ] Video content for social proof

## 🙏 Credits

**Founder**: Stephen Wolf
**Location**: Henderson, NC
**Mission**: Rebuilding community through gourmet popcorn

**Research Sources**:
- [Kernel Craze Official Website](https://kernelcraze.com/)
- [Henderson Dispatch Coverage](https://www.hendersondispatch.com/)
- [The Gateway CDC](https://www.gatewaycdc.org/)

---

Built with 🍿 for Henderson, NC.

*"We're not just making popcorn. We're rebuilding the community we grew up in—one kernel at a time."*
