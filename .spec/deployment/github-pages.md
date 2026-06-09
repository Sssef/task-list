Purpose: Описание конфигурации и шагов для деплоя приложения на GitHub Pages.

What information belongs there:

Настройка vite.config.ts (свойство base)

Структура GitHub Actions workflow

Необходимые разрешения для Actions

Выбор папки для публикации (gh-pages)

What MUST NOT be placed there:

Инструкции по использованию других платформ (Vercel, Netlify)

Разработческие инструкции, не касающиеся деплоя

Required sections:

# GitHub Pages Deployment

## Vite Base Configuration

## GitHub Actions Workflow

## Repository Settings

## Verification

Links from: index.md, implementation/phase-08-deploy.md

Depends on: tech-stack.md

Example structure:

text
# GitHub Pages Deployment
## Vite Base Configuration
Example: `base: '/task-tracker/'`
...