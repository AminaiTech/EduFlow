# 🏫 School Management System (SaaS)

A comprehensive, Multi-Tenant School Management System powered by **Django (Backend)** and **Flutter (Frontend)**. This platform allows a Platform Administrator to host and manage thousands of schools, each with their own isolated data, branding, and domain, while providing School Administrators with powerful tools to manage their institution.

## 🚀 Key Features

### 🌍 Multi-Tenancy Architecture
- **Schema Isolation**: Each school gets its own database schema for maximum security and data separation.
- **Domain Routing**: Schools are accessed via subdomains (e.g., `school1.localhost`) or custom domains.
- **Shared Authentication**: Centralized user management with tenant-specific roles.

### 📱 Frontend Applications
- **Platform Admin App** (`platform_admin/`): For superusers to onboard schools, manage domains, and monitor system health.
- **School Admin App** (`frontend/`): For school staff to manage students, academics, staff, and operations.
- **Public Website Templates** (`schools_web_templates/`): A multi-template Next.js engine for high-performance school websites.

### ✨ Functionality Implemented
- **School Onboarding**: Automated schema creation and domain provisioning.
- **Academics**: Configuration of Academic Years, Terms, Classes, and Sections (Tenant-Scoped).
- **Public Website Templates**: A suite of 5 automated, SEO-optimized templates for schools:
    - **Modern**: Glassmorphism and vibrant animations.
    - **Classic**: Academic serif and structured layouts.
    - **Minimalist**: Clean typography and spacious design.
    - **Creative**: Playful colors and shapes (for early years).
    - **Corporate**: Professional, data-driven grids.
- **Dynamic Vibe Adaptation**: Website tone and content automatically adapt based on the school's sections (Nursery vs. Secondary).
- **Student Management**: Enrollment, Profiles (with Parent/Emergency info), Multi-step forms.
- **Staff Management**: Teacher assignment (Foundation laid).
- **Authentication**: JWT-based secure login with domain context validation.

## 🖼️ Visual Overview

### Platform Administrator Interface
| **Platform Dashboard** | **School Onboarding** |
|:---:|:---:|
| ![Platform Admin Dashboard](platform_admin_dashboard) | ![School Onboarding Form](school_onboarding_form) |
| *Centralized management for all tenants* | *Dynamic section-based onboarding* |

### Public Website Templates (Next.js)
| **Modern Template** | **Creative Template** |
|:---:|:---:|
| ![Modern Template](website_modern_template) | ![Creative Template](website_creative_template) |
| *Glassmorphism & High-end vibes* | *Playful & Fun for early learners* |

## 🛠️ Technology Stack

- **Backend**: Python 3.11, Django 5.2, Django REST Framework, `django-tenants`.
- **Database**: PostgreSQL (Required for Multi-tenancy).
- **Frontend**: Flutter 3.x (Web), Riverpod (State Management), GoRouter, Dio.

## ⚡ Quick Start Guide

### 1. Prerequisites
- Python 3.11+
- PostgreSQL (Running locally)
- Flutter SDK

### 2. Backend Setup
1.  **Database**: Create a Postgres DB named `school_db`.
2.  **Install**:
    ```bash
    cd backend
    python -m venv venv
    .\venv\Scripts\activate
    pip install -r requirements.txt
    ```
3.  **Migrate**:
    ```bash
    python manage.py migrate_schemas --executor=standard
    ```
4.  **Create Public Tenant**:
    If this is a fresh install, ensure the 'public' tenant exists.
    ```bash
    python manage.py shell
    >>> from school.models import Client, Domain
    >>> tenant = Client(schema_name='public', name='PlatformHost', paid_until='2030-12-31', on_trial=False)
    >>> tenant.save()
    >>> domain = Domain(domain='localhost', tenant=tenant, is_primary=True)
    >>> domain.save()
    ```
5.  **Run**:
    ```bash
    python manage.py runserver
    ```

### 3. Frontend Setup (School App)
```bash
cd frontend
flutter pub get
flutter run -d chrome --web-port=5000
```
Access at `http://localhost:5000`.

### 4. Application Flow
1.  **Platform Admin**: Use Backend Admin (`http://localhost:8000/admin`) to create a School (e.g., "Aminai School" -> `aminai`).
2.  **Domain Setup**: Add domain `aminai.localhost` to the school.
3.  **School Admin**: Use Frontend (`http://localhost:5000`).
    - Click "Find School".
    - Enter `aminai.localhost`.
    - Login with School Admin credentials (created during onboarding).
4.  **Manage School**: Add Sessions (Academics), Classes, and Students.

## 📚 Documentation
Detailed documentation can be found in the `docs/` directory:
- [Roles & Permissions](docs/ROLES_AND_PERMISSIONS.md)
- [System Architecture](docs/SYSTEM_ARCHITECTURE.md)
- [Migration Guide](docs/MIGRATION_GUIDE.md)

## 🧪 Development Notes
- **Localhost Subdomains**: To test `*.localhost`, ensure your browser supports it. No `hosts` file change needed for Chrome on Windows usually, but if it fails, add `127.0.0.1 aminai.localhost` to `C:\Windows\System32\drivers\etc\hosts`.
- **Scripts**: Utility scripts (cleanup, resets) are in `backend/utils_scripts/`.

---
**Aminai Technology**