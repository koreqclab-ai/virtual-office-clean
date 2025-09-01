# Virtual Office Subscription - Product Requirements Document
## VirtualAddress.biz - "Classy but Affordable CBD Virtual Office"

### EXECUTIVE SUMMARY
**Product Position:** Premium International Plaza CBD virtual office services with monthly pricing hooks and annual billing for serious businesses.

**Key Strategy:** Display monthly pricing ($9.99/month*) to attract attention, convert with annual billing explanation and value proposition.

**Target Market:** International businesses establishing Singapore presence and local SMEs upgrading from home addresses.

---

## CORE PRODUCT OFFERINGS

### 1. BASIC CBD ADDRESS
**Display Price:** $9.99/month*  
**Actual Billing:** $119.88 annually (paid upfront)  
**Location:** International Plaza, 10 Anson Road, Singapore 079903

**Features:**
- Premium Grade A CBD business address
- ACRA-compliant company registration address
- Mail receipt and secure storage
- Business address usage for all official purposes

**Target Audience:**
- International businesses needing Singapore presence
- Local companies upgrading from home addresses
- Businesses requiring ACRA compliance

---

### 2. ADDRESS + LOCAL MAIL FORWARDING (MONTHLY)
**Display Price:** $15.99/month*  
**Actual Billing:** $191.88 annually (paid upfront)  
**Location:** International Plaza, 10 Anson Road, Singapore 079903

**Features:**
- All Basic CBD Address features
- Monthly mail forwarding within Singapore
- Mail forwarding to any Singapore address
- Forwarding schedule: Last working day of each month

**Target Audience:**
- Businesses with regular local mail volume
- Companies requiring monthly operational updates
- Local businesses with remote operations

---

### 3. ADDRESS + LOCAL MAIL FORWARDING (WEEKLY)
**Display Price:** $19.99/month*  
**Actual Billing:** $239.88 annually (paid upfront)  
**Location:** International Plaza, 10 Anson Road, Singapore 079903

**Features:**
- All Basic CBD Address features
- Weekly mail forwarding within Singapore
- Mail forwarding every Friday
- Priority handling for urgent mail

**Target Audience:**
- Active businesses with high mail volume
- Time-sensitive operations requiring frequent updates
- International businesses with Singapore operations

---

### 4. MAIL SCANNING ADD-ON
**Display Price:** $4.99/month*  
**Actual Billing:** $59.88 annually (paid upfront)  
**Must be combined with any address package**

**Features:**
- Digital scanning of all received mail
- Up to 15 pages monthly included
- High-resolution PDF delivery via email
- Secure cloud storage for 12 months
- Mobile-optimized viewing

**Additional Charges:**
- $0.50 per page above 15 pages monthly
- Charged monthly, not annually
- Automatically added to account

**Target Audience:**
- Digital-first businesses
- International companies managing remotely
- Businesses requiring immediate mail access

---

### 5. CHEQUE DEPOSIT SERVICE
**Display Price:** $10 per cheque  
**Billing:** Pay-per-use, charged monthly  
**No annual commitment required**

**Features:**
- Professional cheque deposit handling
- Bank deposit within 1-2 business days
- Email confirmation with deposit receipt
- Integration with major Singapore banks
- Secure handling protocols

**Requirements:**
- Must have active address package
- Bank account must be in company name
- Valid banking authorization required

**Target Audience:**
- Businesses receiving cheque payments
- Traditional industries with cheque transactions
- Companies requiring payment processing support

---

## COMPLIANCE & DOCUMENTATION REQUIREMENTS

### MANDATORY DOCUMENTATION
**IMPORTANT:** Singapore compliance regulations require proper documentation for all virtual office services. Clients must upload registration documents when available to ensure successful processing and regulatory compliance.

**Required Documents:**
- **Business Entities:** ACRA registration certificate, company constitution, director/shareholder details
- **Personal Names:** Valid ID/passport, proof of address, personal declaration form
- **Foreign Companies:** Certificate of incorporation, power of attorney, local representative details

**Upload Timeline:**
- Initial documents can be submitted after signup
- Updates required within 30 days of any changes
- Annual compliance review documentation

---

## ENTITY TYPES & PRICING

### BUSINESS ENTITIES
**Standard Pricing:** As listed above  
**Multi-Entity Discounts:**
- 2nd entity: 10% discount
- 3rd entity: 15% discount  
- 4th+ entities: 20% discount

**Requirements:**
- Each entity requires separate ACRA registration
- All entities under same beneficial ownership
- Annual billing required for all entities
- Upload company registration documents for compliance processing

### PERSONAL NAMES
**Pricing:** Same as business entity pricing  
**No multi-entity discounts apply**

**Features:**
- Personal name registration at business address
- Individual mail handling
- Separate account management
- Privacy protection services

**Requirements:**
- Valid Singapore ID or international passport
- Personal declaration form
- Separate annual billing
- Upload identification documents for compliance processing

---

## BILLING & PAYMENT STRUCTURE

### PRIMARY BILLING MODEL
**Display Strategy:** Monthly pricing hooks ($9.99/month*)  
**Actual Billing:** Annual payments only (except add-ons)  
**Payment Terms:** Full annual amount due upfront

### BILLING EXAMPLES
```
Basic Address:
Display: $9.99/month*
Bill: $119.88 annually
Savings message: "Save $19.20 vs monthly billing"

Mail Forwarding (Weekly):
Display: $19.99/month*  
Bill: $239.88 annually
Savings message: "Save $39.60 vs monthly billing"
```

### POSTAGE & MAIL FORWARDING DISCLAIMER
**IMPORTANT:** Mail forwarding services DO NOT include postage costs. Clients must maintain prepaid postage credits with us for all mail forwarding and ad-hoc services. Credits must be topped up in advance to ensure uninterrupted service.

### POSTAGE CREDITS SYSTEM
**How It Works:**
- Clients purchase prepaid postage credits ($30/$50/$100 packages)
- Credits are used for actual postage costs (no markup)
- Mail forwarding only occurs when sufficient credits are available
- Low balance alerts sent at 20% remaining

**Credit Usage:**
- Local mail: Actual Singapore Post rates
- Express local: Actual courier rates
- International mail: Actual international postage rates
- All postage charged at cost with no markup

**Additional Add-on Charges:**
- Insufficient credits will pause mail forwarding
- Top-up required before service resumes
- $1 handling fee per forwarded item
- Email notification when credits are 80% used

---

## TECHNICAL REQUIREMENTS

### WEBSITE FUNCTIONALITY

#### 1. Pricing Display System
**Monthly Hook Implementation:**
```javascript
const pricingDisplay = {
  hookPrice: "$9.99/month*",
  actualBilling: "$119.88 annually",
  disclaimer: "*Annual billing for serious businesses"
}
```

#### 2. Contact Form Integration
**Current Implementation:** Formspree (ID: xwpnlagk)
**Required Fields:**
- Company Name
- Contact Person
- Email
- Phone
- Service Interest
- Number of Entities
- Button Source (for analytics)

#### 3. Thank You Page Functionality
**URL:** /thank-you
**Content:** Service confirmation, next steps, contact information
**Analytics:** Track conversion source and service type

### BACKEND REQUIREMENTS

#### 1. Payment Processing
**Annual Billing System:**
- Stripe integration for annual payments
- Automatic invoice generation
- Payment reminder system (30/15/7 days before expiry)

#### 2. Postage Credits Management
**Monthly Credit Allocation:**
- Automatic credit refresh on billing anniversary
- Usage tracking and reporting
- Overage calculation and billing

#### 3. Multi-Entity Discount Engine
**Calculation Logic:**
```javascript
const calculateDiscount = (entityCount) => {
  if (entityCount >= 4) return 0.20;
  if (entityCount === 3) return 0.15;  
  if (entityCount === 2) return 0.10;
  return 0;
}
```

---

## USER EXPERIENCE REQUIREMENTS

### CONVERSION FLOW
1. **Landing Page:** Monthly pricing hook prominent
2. **Service Selection:** Compare all service levels
3. **Entity Configuration:** Business vs personal, multiple entities
4. **Billing Explanation:** Annual commitment value proposition
5. **Contact Form:** Lead capture with service preferences
6. **Follow-up:** Quote generation and onboarding

### MESSAGING FRAMEWORK
**Hook:** "CBD Virtual Office from $9.99/month*"  
**Value:** "International Plaza prestige at smart pricing"  
**Close:** "Annual billing for serious business commitment"  
**Retention:** "Multi-entity discounts for growing businesses"

---

## COMPLIANCE REQUIREMENTS

### ACRA COMPLIANCE
- All addresses must be ACRA-registered
- Company registration support documentation
- Authorized address usage certificates
- Annual compliance reporting

### SINGAPORE REGULATIONS
- Virtual office licensing requirements
- Mail forwarding regulatory compliance
- Data protection (PDPA) compliance
- Banking integration authorizations

### INTERNATIONAL STANDARDS
- Anti-money laundering (AML) procedures
- Know Your Customer (KYC) requirements  
- International mail forwarding regulations
- Cross-border payment compliance

---

## ANALYTICS & TRACKING

### KEY PERFORMANCE INDICATORS

#### 1. Acquisition Metrics
- Monthly pricing keyword rankings
- Cost per acquisition (target: <$75)
- Annual billing acceptance rate (target: >80%)
- Multi-entity inquiry rate (target: >20%)

#### 2. Conversion Metrics
- Landing page conversion rate (target: >3%)
- Contact form completion rate
- Quote-to-close conversion rate
- Annual plan vs monthly inquiry ratio

#### 3. Customer Metrics
- Customer lifetime value
- Annual retention rate
- Multi-entity expansion rate
- Postage credits utilization rate

### TRACKING IMPLEMENTATION
**Google Analytics 4:** Enhanced ecommerce tracking
**Google Ads:** Conversion tracking with offline conversions
**Formspree:** Lead source attribution
**Custom Dashboard:** Real-time business metrics

---

## LAUNCH REQUIREMENTS

### IMMEDIATE LAUNCH (Week 1)
**Must Have:**
- All four service packages clearly displayed
- Monthly pricing hooks with annual billing explanation
- Functional contact form with Formspree integration
- Thank you page with next steps
- Mobile-responsive design

**Should Have:**
- FAQ section with annual billing explanation
- Testimonials and social proof
- Multi-entity discount information
- Postage credits explanation

### POST-LAUNCH ITERATION (Month 1)
**Enhancements:**
- Payment processing integration
- Automated quote generation
- Customer dashboard development  
- Advanced analytics implementation

---

## SUCCESS METRICS

### 7-Day Smoke Test Targets
- 50+ qualified leads from Google Ads
- >2% landing page conversion rate
- >75% annual billing acceptance in quotes
- <$100 cost per acquisition

### 30-Day Optimization Targets  
- 100+ monthly qualified leads
- >3% landing page conversion rate
- >80% annual billing conversion rate
- <$75 cost per acquisition

### 90-Day Scale Targets
- 300+ monthly qualified leads
- Market leadership in "virtual office singapore $9.99" searches
- 25% of inquiries for multi-entity services
- Profitability with <$50 customer acquisition cost

---

This comprehensive product requirements document provides the foundation for VirtualAddress.biz's strategic positioning as the "classy but affordable CBD virtual office" solution, with clear technical specifications for monthly pricing hooks and annual billing implementation.