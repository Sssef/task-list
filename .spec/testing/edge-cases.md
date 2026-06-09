Purpose: Коллекция граничных случаев и нестандартных сценариев, которые должен учитывать разработчик/тестировщик.

What information belongs there:

Пустые состояния (нет задач, нет результатов поиска)

Задачи с отсутствующим дедлайном

Одновременное применение нескольких фильтров, не дающих результатов

Длинные заголовки

Мобильное поведение фильтров и диалогов

Сценарии с localStorage, заполненным некорректными данными

What MUST NOT be placed there:

Решения проблем (только описание кейсов)

Повторение acceptance criteria

Required sections:

# Edge Cases

## Empty & Null States

## Boundary Values

## Concurrency Scenarios

## Data Corruption

Links from: index.md, manual-checklist.md

Depends on: acceptance-criteria.md

Example structure:

text
# Edge Cases
## Empty & Null States
### No tasks at all
- Expected: show empty state illustration
### No tasks match filter
- Expected: "No tasks found" message
...