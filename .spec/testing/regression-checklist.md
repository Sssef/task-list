Purpose: Список проверок для быстрой верификации ключевых функций перед деплоем.

What information belongs there:

Список основных операций, которые не должны сломаться после изменений

Приоритеты проверок (P1, P2)

Краткие ожидаемые результаты

What MUST NOT be placed there:

Детальные шаги (они в manual-checklist)

Новые баги (для этого отдельный документ)

Required sections:

# Regression Checklist

## Must Have (P1)

## Should Have (P2)

## Platform/Browser Coverage

Links from: index.md, implementation/phase-08-deploy.md

Depends on: manual-checklist.md

Example structure:

text
# Regression Checklist
## Must Have (P1)
- [ ] Add task → appears in list
- [ ] Delete task → confirm dialog → task removed
- [ ] Apply status filter → list updates correctly
...