# Step 1: Store daily temperatures
temperatures = [32, 35, 30, 28, 36, 33, 31]  # Example for a week

# Step 2: Find hottest and coldest day
hottest = max(temperatures)
coldest = min(temperatures)
print(f"Hottest temperature: {hottest}°C")
print(f"Coldest temperature: {coldest}°C")

# Step 3: Calculate average temperature
average_temp = sum(temperatures) / len(temperatures)
above_avg_days = [temp for temp in temperatures if temp > average_temp]
print(f"Average temperature: {average_temp:.2f}°C")
print(f"Number of days above average: {len(above_avg_days)}")

# Step 4: Demonstrate list slicing
print("\nFirst 3 days temperatures:", temperatures[:3])       # First 3 days
print("Last 3 days temperatures:", temperatures[-3:])         # Last 3 days
print("Middle days temperatures:", temperatures[2:5])         # Days 3 to 5
