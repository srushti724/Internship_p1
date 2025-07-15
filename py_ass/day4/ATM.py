# ATM Simulation using Exception Handling

# Initial user data

user_pin = "2107"
balance = 10000.0  # Initial balance

def show_menu():
    print("\n=== ATM Menu ===")
    print("1. Check Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")

# Main ATM process
try:
    entered_pin = input("Enter your 4-digit PIN: ")
    if entered_pin != user_pin:
        raise ValueError("Invalid PIN! Access Denied.")

    print("Access Granted. Welcome!")

    while True:
        show_menu()
        try:
            choice = int(input("Enter your choice (1-4): "))

            if choice == 1:
                print(f"Your current balance is ₹{balance:.2f}")

            elif choice == 2:
                amount = float(input("Enter amount to deposit: "))
                if amount <= 0:
                    raise ValueError("Amount must be greater than zero.")
                balance += amount
                print(f"₹{amount:.2f} deposited successfully. New balance: ₹{balance:.2f}")

            elif choice == 3:
                amount = float(input("Enter amount to withdraw: "))
                if amount <= 0:
                    raise ValueError("Amount must be greater than zero.")
                if amount > balance:
                    raise ValueError("Insufficient balance!")
                balance -= amount
                print(f"₹{amount:.2f} withdrawn successfully. New balance: ₹{balance:.2f}")

            elif choice == 4:
                print("Thank you for using the ATM. Goodbye!")
                break

            else:
                print("Invalid choice. Please select between 1 to 4.")

        except ValueError as ve:
            print("Error:", ve)
        except Exception as e:
            print("Unexpected error:", e)

except ValueError as ve:
    print("Login Error:", ve)
except Exception as e:
    print("Something went wrong:", e)
