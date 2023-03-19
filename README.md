# Jest `Intl.DateTimeFormat()` bug demonstration repo

This test suite serves to demonstrate the lack of a link
between the `Intl.DateTimeFormat()` class and jest's `useFakeTimers()`.
This means that the `Intl.DateTimeFormat()` class
will always use the current time of the system, not the time
specified by `useFakeTimers`.

<br>

## Clone this repo
### With git
```bash
    git clone https://github.com/BenIsenstein/jest_fix_intl_fake_timers.git
```
### With gh cli
```bash
    gh repo clone BenIsenstein/jest_fix_intl_fake_timers
```

<br>

## Run the demonstration
```bash
cd jest_fix_intl_fake_timers && npm i && npm test
```

<br>

## Notes

<br>

### You should expect the first test to fail (Testing link between `Intl.DateTimeFormat()` and `Jest.useFakeTimers()`).
- In both cases it will log "`Current system time interpreted by formatter: ${CURRENT_DATE}`"

<br>

### You should expect the second test to pass (Feeding `Date.now()` to every method call).
- In the first case look for "`Current system time interpreted by formatter: 2022-05-31`"
- In the second case look for "`Current system time interpreted by formatter: 2022-06-01`"
