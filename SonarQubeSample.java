import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SonarQubeSample {

    public static void main(String[] args) {
        SonarQubeSample sample = new SonarQubeSample();
        sample.readFile("sample.txt");
        sample.calculateFactorial(5);
    }

    // Improved resource management with try-with-resources
    public void readFile(String filePath) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }

    // Method to calculate factorial with handling for potential overflow
    public int calculateFactorial(int number) {
        if (number < 0) {
            System.out.println("Factorial is not defined for negative numbers");
            return -1;
        }
        
        int result = 1;
        for (int i = 1; i <= number; i++) {
            if (Integer.MAX_VALUE / result < i) { // Prevent overflow
                System.out.println("Result too large for int.");
                return -1;
            }
            result *= i;
        }
        return result;
    }
}
