# try-except-else-finally Example in Python

```python
try:
    a = 0
    b = 100 / a

except ZeroDivisionError:
    print("Zero division error")

else:
    print("Enter value ", b)

finally:
    print("execution completed")
```

---

## 💡 Explanation

| Block      | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| `try`      | Attempts to divide 100 by `a` (which is 0), causing a `ZeroDivisionError`. |
| `except`   | Catches the division by zero error and prints a message.                |
| `else`     | Runs **only if no error** occurs in `try`. Skipped in this case.        |
| `finally`  | Executes **no matter what**, even if an error occurred.                 |

---

## 🧪 Output

```
Zero division error
execution completed
```
