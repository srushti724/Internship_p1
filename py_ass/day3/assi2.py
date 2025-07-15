# Global variable
counter = 0

# Function to increment the global counter
def increment():
    global counter  # Use the global variable
    counter += 1
    print(f"Counter is now: {counter}")

# Call the function three times
increment()
increment()
increment()
