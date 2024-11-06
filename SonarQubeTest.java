public class SonarQubeTest {

    // Hardcoded values - SonarQube will flag this as a code smell
    private static final String WELCOME_MESSAGE = "Welcome to SonarQube Test";
    private static final String GREETING = "Hello";

    public static void main(String[] args) {
        SonarQubeTest test = new SonarQubeTest();
        test.printWelcomeMessage();
        test.calculateSum(5);
    }

    // Method with a bug: division by zero if n = 0
    public int calculateSum(int n) {
        int sum = 0;
        try {
            for (int i = 1; i <= n; i++) {
                sum += i / n; // Possible division by zero
            }
        } catch (ArithmeticException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
        return sum;
    }

    public void printWelcomeMessage() {
        System.out.println(WELCOME_MESSAGE);

        // Using a suboptimal loop for printing greeting messages
        for (int i = 0; i < 5; i++) {
            System.out.println(GREETING + " " + (i + 1));
        }
    }
}
