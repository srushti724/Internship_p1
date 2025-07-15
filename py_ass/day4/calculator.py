# Simple Calculator using if-else

print("Welcome to the Calculator!")
print("Select an operation:")
print("1. Addition (+)")
print("2. Subtraction (-)")
print("3. Multiplication (*)")
print("4. Division (/)")

# Take user input
choice = input("Enter choice (1/2/3/4): ")

# Input numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Conditional logic
if choice == '1':
    result = num1 + num2
    print("Result: ", result)
elif choice == '2':
    result = num1 - num2
    print("Result: ", result)
elif choice == '3':
    result = num1 * num2
    print("Result: ", result)
elif choice == '4':
    if num2 != 0:
        result = num1 / num2
        print("Result: ", result)
    else:
        print("Error: Cannot divide by zero.")
else:
    print("Invalid input! Please choose 1, 2, 3, or 4.")
