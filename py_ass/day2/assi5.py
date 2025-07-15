# Step 1: Tuple with (product, price, quantity)
product_info = ("Pen", 10.5, 3)

# Step 2: Unpack the tuple into variables
product, price, quantity = product_info

# Step 3: Calculate total cost
total_cost = price * quantity
print(f"Total cost of {product}s: ₹{total_cost}")

# Step 4: Convert tuple to list to modify quantity
product_list = list(product_info)
product_list[2] = 5  # Let's change quantity from 3 to 5

# Step 5: Convert back to tuple
updated_product_info = tuple(product_list)

# Step 6: Print updated values
print("Updated product info:")
print(f"Product: {updated_product_info[0]}")
print(f"Price: ₹{updated_product_info[1]}")
print(f"Quantity: {updated_product_info[2]}")
