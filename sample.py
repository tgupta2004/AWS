# Sample Python code for SonarQube testing

import math

def calculate_area(radius):
    if radius <= 0:
        return "Radius should be greater than 0"
    area = math.pi * radius ** 2
    return area

def calculate_perimeter(radius):
    if radius <= 0:
        return "Radius should be greater than 0"
    perimeter = 2 * math.pi * radius
    return perimeter

# Duplicated code (SonarQube should flag this)
def calculate_diameter(radius):
    if radius <= 0:
        return "Radius should be greater than 0"
    diameter = 2 * radius
    return diameter

# Sample long line (SonarQube should flag this if line length is checked)
long_string = "This is a very long string that goes beyond the standard line length for the purpose of testing SonarQube's detection of long lines in code."

# Unused variable
unused_variable = "This variable is not used anywhere in the code"

# Testing functions
radius = 5
print(f"Area of circle with radius {radius}: {calculate_area(radius)}")
print(f"Perimeter of circle with radius {radius}: {calculate_perimeter(radius)}")
print(f"Diameter of circle with radius {radius}: {calculate_diameter(radius)}")
