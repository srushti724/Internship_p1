# Python Conditions and String Reversal Example

##  Find the Largest of Three Numbers

```python
# Take 3 numbers from user and check which is the largest and print.
a = int(input("Enter first number : "))
b = int(input("Enter second number : "))
c = int(input("Enter third number : "))

if a > b and a > c:
    print("'if block was executed' largest number is : ", a)
elif b > a and b > c:
    print("'elif block was executed' largest number is :", b)
else:
    print("'else block was executed' largest number is : ", c)

print("-" * 50)
```

###  Logic Used:
- Uses conditional statements (`if`, `elif`, `else`) to compare values.
- Compares each number to determine the largest.

---

##  Palindrome Checker

```python
# Take a palindrome word and print same word after reversing
word = input("Enter string : ")
a = word[::-1]

if word == a:
    print("String is palindrome : ", word)
else:
    print("String is not palindrome : ", word)
```

###  Logic Used:
- Reverses the string using slicing (`[::-1]`).
- Compares original and reversed string to check if it's a palindrome.

---

##  Sample Output

```
Enter first number : 11
Enter second number : 45
Enter third number : 22
'elif block was executed' largest number is : 45
--------------------------------------------------
Enter string : madam
String is palindrome :  madam
```

