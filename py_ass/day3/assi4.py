# Secret number (hardcoded)
secret_number = 7

# Infinite loop until correct guess
while True:
    guess = int(input("Guess the secret number (between 1 and 10): "))
    
    if guess == secret_number:
        print(" Congratulations! You guessed it right.")
        break  # Exit the loop
    else:
        print("❌ Try again!")
