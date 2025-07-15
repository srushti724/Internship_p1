
#  Python Basics – Quick Notes

---

## 1.  Data Types
- `int` – Whole numbers (e.g., `10`)
- `float` – Decimal numbers (e.g., `3.14`)
- `str` – Text (e.g., `"hello"`)
- `bool` – True or False
- `list`, `tuple`, `set`, `dict` – Collection types

---

## 2.  List
- Ordered, changeable, allows duplicates.
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # apple
```

---

## 3.  Tuple
- Ordered, unchangeable, allows duplicates.
```python
colors = ("red", "green", "blue")
print(colors[1])  # green
```

---

## 4.  String
- Sequence of characters.
```python
text = "hello world"
print(text.upper())       # HELLO WORLD
print(" ".join(["Python", "is", "fun"]))  # Python is fun
```

---

## 5.  Set
- Unordered, no duplicates.
```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)
```

---

## 6.  Variable
- Used to store values.
```python
name = "Srushti"
age = 20
```

---

## 7.  Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `>`, `<`, `==`, `!=`
```python
a = 10
b = 3
print(a + b)      # 13
print(a > b)      # True
```

---

## 8.  Functions
- Reusable blocks of code.
```python
def greet(name):
    print(f"Hello, {name}!")

greet("Srushti")
```
