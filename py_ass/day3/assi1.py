# Ask the user to enter two numbers
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Arithmetic operations
sum_result = num1 + num2
diff_result = num1 - num2
prod_result = num1 * num2

# Handling division safely
if num2 != 0:
    div_result = num1 / num2
    mod_result = num1 % num2
else:
    div_result = "undefined (division by zero)"
    mod_result = "undefined (modulo by zero)"

# Print arithmetic results
print(f"\nSum: {sum_result}")
print(f"Difference: {diff_result}")
print(f"Product: {prod_result}")
print(f"Division: {div_result}")
print(f"Remainder: {mod_result}")

# Comparison
if num1 > num2:
    print(f"\n{num1} is greater than {num2}.")
elif num1 < num2:
    print(f"\n{num2} is greater than {num1}.")
else:
    print(f"\nBoth numbers are equal.")
