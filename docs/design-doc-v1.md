# Design Doc v1

## 1) Project purpose
**One-sentence summary:**
A web-based platform that connects business owners with employees to manage work, tasks, and communication efficiently.

**Why this matters:**
This system helps business owners track employees, assign tasks, and monitor performance, while employees can easily view their work and stay organized.

---

## 2) Target users
- **Primary user:**
  Employees (workers/staff)

- **Secondary user:**
  Business Owner / Employer

- **What they need:**
  - Employees need:
    - View tasks and schedules
    - Receive updates
    - Track their work

  - Business Owner needs:
    - Manage employees
    - Assign tasks
    - Monitor performance
    - View reports

---

## 3) MVP scope
### In scope now
- User login system (Employee & Business Owner)
- Dashboard for employees (view tasks)
- Dashboard for business owner (manage employees)
- Task assignment system
- Basic communication (notifications)

### Out of scope for now
- Payment system
- Advanced analytics dashboard
- Mobile application
- AI-based recommendations

---

## 4) Core user flow
Describe the basic flow in 3-5 steps:

1. User logs into the system (Employee or Business Owner)
2. Business Owner creates or assigns tasks
3. Employee views assigned tasks
4. Employee completes task and updates status
5. Business Owner reviews progress and performance

---

## 5) Architecture (C4-lite)

### Context view
- **users:**
  - Employees
  - Business Owner

- **main system:**
  - Employee Management Web App

- **outside systems/services:**
  - Email/Notification service
  - Authentication service

---

### Container view
- **frontend:**
  - HTML, CSS, JavaScript (or Thymeleaf)
  - Displays UI for both employee and owner

- **backend:**
  - Java (Spring Boot)
  - Handles business logic, authentication, APIs

- **database:**
  - MySQL / PostgreSQL
  - Stores users, tasks, reports

- **other service (if needed):**
  - Notification service (email or SMS)

---

### Diagram or image
Add your sketch here or link an image.

Example:

[ Business Owner ] ---> [ Web App ] <--- [ Employee ]
|
[ Backend ]
|
[ Database ]


---

## 6) Wireframes

### Screen 1 - Entry / Home
- **purpose:**
  Allow users to login or register

- **main action:**
  Login / Sign up

- **image / sketch:**
  Simple login form with username & password

---

### Screen 2 - Core Task
- **purpose:**
  Main dashboard

- **main action:**
  - Employee: View tasks
  - Business Owner: Assign tasks

- **image / sketch:**
  Dashboard with task list and buttons

---

### Screen 3 - Result / Detail / Confirmation
- **purpose:**
  Show task details or completion status

- **main action:**
  Update task status or confirm completion

- **image / sketch:**
  Task detail page with status update button

---

## 7) Sprint 1 plan

### Top goals
1. Create login system
2. Build basic dashboard UI
3. Implement task assignment feature

### Initial issues / work chunks
- Issue: Create login page UI
- Issue: Setup backend authentication
- Issue: Create employee dashboard
- Issue: Create business owner dashboard

---

## 8) Risks / assumptions

### Risks
- Limited time to complete all features
- Bugs in authentication system

### Assumptions
- Users have internet access
- Basic UI is enough for MVP

---

## 9) Scope cut list
If time runs short, cut these first:
- Notification system
- Advanced UI design

---

## 10) Evidence links
- Board link:
- Sprint Packet link:
- Related issues:
- Related PRs (later):

---

## 11) Quality check
- [x] project purpose is clear
- [x] target users are specific
- [x] MVP scope is realistic
- [x] architecture is included
- [x] 3 wireframes are included
- [x] Sprint 1 goals are small enough to demo
- [x] risks are honest
- [ ] evidence links are included where possible
