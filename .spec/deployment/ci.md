Purpose: Детализация процесса непрерывной интеграции и деплоя через GitHub Actions.

What information belongs there:

Триггеры (push в main)

Шаги: checkout, setup-node, install, build, deploy

Используемые экшены (peaceiris/actions-gh-pages)

Кэширование для ускорения сборки

What MUST NOT be placed there:

Конфигурация альтернативных CI-систем

Инструкции по локальному деплою

Required sections:

# CI/CD Pipeline

## Trigger

## Jobs

## Environment Variables

## Caching

Links from: github-pages.md

Depends on: github-pages.md

Example structure:

text
# CI/CD Pipeline
## Trigger
- Push to `main` branch
...