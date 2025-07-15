# combines a user's first and last name with a space in between.

first_name = "Srushti"
last_name = "Pagar"
full_name = first_name + " " + last_name
print(full_name)

#displays: "The price of [item] is $[price]" (use variables).
item = "Laptop"
price = 749.99
print(f"The price of {item} is ${price}")

#Convert the string "hello world" to "HELLO WORLD" using string methods.
text = "hello world"
upper_text = text.upper()
print(upper_text)

#Use .join() to convert the list ['Python', 'is', 'awesome'] into a proper sentence.
words = ['Python', 'is', 'awesome']
sentence = " ".join(words)
print(sentence)


# Print today's date in "DD-MM-YYYY" format using string formatting (use datetime module).
from datetime import datetime

today = datetime.today()
formatted_date = today.strftime("%d-%m-%Y")
print(formatted_date)
