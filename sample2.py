# Another Sample Python code for SonarQube testing

import datetime  # Unused import

# Function with complex logic (SonarQube should flag this)
def calculate_discount(price, customer_type):
    if price < 0:
        return "Price cannot be negative"
    
    discount = 0
    if customer_type == "regular":
        if price > 100:
            discount = price * 0.1
        elif price > 50:
            discount = price * 0.05
    elif customer_type == "premium":
        if price > 100:
            discount = price * 0.2
        elif price > 50:
            discount = price * 0.1
    else:
        return "Unknown customer type"
    
    final_price = price - discount
    return final_price

# Hardcoded values (SonarQube should flag this)
def get_user_info():
    name = "John Doe"  # Hardcoded name
    age = 30  # Hardcoded age
    print(f"User Info - Name: {name}, Age: {age}")
    return name, age

# Function name not following naming conventions
def PrintMessage():
    print("This message is printed from a function with a non-standard name")

# Test the functions
print(calculate_discount(120, "regular"))
print(calculate_discount(70, "premium"))
get_user_info()
PrintMessage()
