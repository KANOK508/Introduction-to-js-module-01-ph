#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 

//                                       App Development Project course
// Constants for limits
#define MAX_DISHES 100
#define MAX_ORDERS 200

#define MAX_NAME_LENGTH 50
#define MAX_DESC_LENGTH 100
#define MAX_ID_LENGTH 20
#define ADMIN_PASSWORD "admin123" // Set your desired admin password here

// Structure definitions
struct Dish {
    char id[MAX_ID_LENGTH];
    char name[MAX_NAME_LENGTH];
    char description[MAX_DESC_LENGTH];
    float price;
    int preparation_time; // in minutes
};

struct Order {
    char id[10];
    char customer_name[50];
    char address[100];
    char contact_number[15];
    char dish_id[10];
    int status; // 1 for placed, 0 for canceled
};

// Function prototypes
void loadData(struct Dish dishes[], int *dishCount, struct Order orders[], int *orderCount);

void saveData(struct Dish dishes[], int dishCount, struct Order orders[], int orderCount);

void addDish(struct Dish dishes[], int *dishCount);
void updateDish(struct Dish dishes[], int dishCount);
void deleteDish(struct Dish dishes[], int *dishCount);
void viewAllDishes(struct Dish dishes[], int dishCount);
void searchDishes(struct Dish dishes[], int dishCount);
void viewDishInformation(struct Dish dishes[], int dishCount);
void viewSalesReport(struct Order orders[], int orderCount, struct Dish dishes[], int dishCount);
void placeOrder(struct Order orders[], int *orderCount, struct Dish dishes[], int dishCount);
void cancelOrder(struct Order orders[], int orderCount);
void viewAllOrders(struct Order orders[], int orderCount);
void adminPanel(struct Dish dishes[], int *dishCount, struct Order orders[], int *orderCount);
void customerPanel(struct Dish dishes[], int dishCount, struct Order orders[], int *orderCount);


// Main function
int main() {
    struct Dish dishes[MAX_DISHES];
    struct Order orders[MAX_ORDERS];
    int dishCount = 0, orderCount = 0;

    loadData(dishes, &dishCount, orders, &orderCount);

    int choice;
    while (1) {
        printf("\n=== Restaurant Management System ===\n");
        printf("1. Admin Panel\n");
        printf("2. Customer Panel\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1: {
                // Admin password verification
                char password[20];
                printf("Enter admin password: ");
                scanf("%s", password);

                if (strcmp(password, ADMIN_PASSWORD) == 0) {
                    adminPanel(dishes, &dishCount, orders, &orderCount);
                } else {
                    printf("Incorrect password! Access denied.\n");
                }
                break;
            }
            case 2:
                customerPanel(dishes, dishCount, orders, &orderCount);
                break;
            case 3:
                // Save data to files before exiting
                saveData(dishes, dishCount, orders, orderCount);
                printf("Exiting the application...\n");
                exit(0);
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}

// Admin panel function
void adminPanel(struct Dish dishes[], int *dishCount, struct Order orders[], int *orderCount) {
    int choice;
    while (1) {
        printf("\n=== Admin Panel ===\n");
        printf("1. Add Dish\n");
        printf("2. Update Dish\n");
        printf("3. Delete Dish\n");
        printf("4. View All Dishes\n");
        printf("5. Search Dishes\n");
        printf("6. View Sales Report\n");
        printf("7. View All Orders\n");
        printf("8. Exit Admin Panel\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addDish(dishes, dishCount);
                break;
            case 2:
                updateDish(dishes, *dishCount);
                break;
            case 3:
                deleteDish(dishes, dishCount);
                break;
            case 4:
                viewAllDishes(dishes, *dishCount);
                break;
            case 5:
                searchDishes(dishes, *dishCount);
                break;
            case 6:
                viewSalesReport(orders, *orderCount, dishes, *dishCount);
                break;
            case 7:
                viewAllOrders(orders, *orderCount);
                break;
            case 8:
                return; // Exit the admin panel
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }
}


// Customer panel function
void customerPanel(struct Dish dishes[], int dishCount, struct Order orders[], int *orderCount) {
    int choice;
    while (1) {
        printf("\n=== Customer Panel ===\n");
        printf("1. Place Order\n");
        printf("2. Cancel Order\n");
        printf("3. Exit Customer Panel\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                placeOrder(orders, orderCount, dishes, dishCount);
                break;
            case 2:
                cancelOrder(orders, *orderCount);
                break;
            case 3:
                return; // Exit the customer panel
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }
}

// Load dishes and orders data from files
void loadData(struct Dish dishes[], int *dishCount, struct Order orders[], int *orderCount) {
    // Load dishes from file
    FILE *dishFile = fopen("dishes.dat", "rb");
    if (dishFile != NULL) {
        fread(dishCount, sizeof(int), 1, dishFile);  // Read the dish count
        fread(dishes, sizeof(struct Dish), *dishCount, dishFile);  // Read the dishes array
        fclose(dishFile);
        printf("Loaded %d dishes from dishes.dat.\n", *dishCount);
    } else {
        printf("Could not open dishes.dat for reading. Starting with an empty dish list.\n");
    }

    // Load orders from file
    FILE *orderFile = fopen("orders.dat", "rb");
    if (orderFile != NULL) {
        fread(orderCount, sizeof(int), 1, orderFile);  // Read the order count
        fread(orders, sizeof(struct Order), *orderCount, orderFile);  // Read the orders array
        fclose(orderFile);
        printf("Loaded %d orders from orders.dat.\n", *orderCount);
    } else {
        printf("Could not open orders.dat for reading. Starting with an empty order list.\n");
    }
}

// Save dishes and orders data into a file
void saveData(struct Dish dishes[], int dishCount, struct Order orders[], int orderCount) {
    // Save dishes to file
    FILE *dishFile = fopen("dishes.dat", "wb");
    if (dishFile != NULL) {
        fwrite(&dishCount, sizeof(int), 1, dishFile);  // Write the dish count
        fwrite(dishes, sizeof(struct Dish), dishCount, dishFile);  // Write the dishes array
        fclose(dishFile);
        printf("Saved %d dishes to dishes.dat.\n", dishCount);
    } else {
        printf("Could not open dishes.dat for writing.\n");
    }

    // Save orders to file
    FILE *orderFile = fopen("orders.dat", "wb");
    if (orderFile != NULL) {
        fwrite(&orderCount, sizeof(int), 1, orderFile);  // Write the order count
        fwrite(orders, sizeof(struct Order), orderCount, orderFile);  // Write the orders array
        fclose(orderFile);
        printf("Saved %d orders to orders.dat.\n", orderCount);
    } else {
        printf("Could not open orders.dat for writing.\n");
    }
}

// Function to add a new dish
void addDish(struct Dish dishes[], int *dishCount) {
    if (*dishCount >= MAX_DISHES) {
        printf("Cannot add more dishes. Maximum limit reached (%d).\n", MAX_DISHES);
        return;
    }

    struct Dish newDish;

    // Input the details of the new dish
    printf("Enter dish ID: ");
    scanf("%s", newDish.id);
    printf("Enter dish name: ");
    scanf(" %[^\n]", newDish.name);  // Read string with spaces
    printf("Enter dish description: ");
    scanf(" %[^\n]", newDish.description);
    printf("Enter dish price: ");
    scanf("%f", &newDish.price);
    printf("Enter preparation time (in minutes): ");
    scanf("%d", &newDish.preparation_time);

    // Add the new dish to the array
    dishes[*dishCount] = newDish;
    (*dishCount)++;  // Increment the dish count

    printf("Dish '%s' added successfully!\n", newDish.name);
}


// Function to update an existing dish
void updateDish(struct Dish dishes[], int dishCount) {
    if (dishCount == 0) {
        printf("No dishes available to update.\n");
        return;
    }

    char dishId[10];
    int found = 0;

    // Input the dish ID to be updated
    printf("Enter dish ID to update: ");
    scanf("%s", dishId);

    // Search for the dish with the given ID
    for (int i = 0; i < dishCount; i++) {
        if (strcmp(dishes[i].id, dishId) == 0) {
            found = 1;

            // Display current dish details
            printf("Current details for dish '%s':\n", dishes[i].name);
            printf("ID: %s\n", dishes[i].id);
            printf("Name: %s\n", dishes[i].name);
            printf("Description: %s\n", dishes[i].description);
            printf("Price: %.2f\n", dishes[i].price);
            printf("Preparation Time: %d minutes\n", dishes[i].preparation_time);

            // Input new details
            printf("Enter new dish name (leave empty to keep current): ");
            char newName[50];
            scanf(" %[^\n]", newName);
            if (strlen(newName) > 0) {
                strcpy(dishes[i].name, newName);
            }

            printf("Enter new dish description (leave empty to keep current): ");
            char newDescription[100];
            scanf(" %[^\n]", newDescription);
            if (strlen(newDescription) > 0) {
                strcpy(dishes[i].description, newDescription);
            }

            printf("Enter new dish price (-1 to keep current): ");
            float newPrice;
            scanf("%f", &newPrice);
            if (newPrice >= 0) {
                dishes[i].price = newPrice;
            }

            printf("Enter new preparation time (-1 to keep current): ");
            int newPreparationTime;
            scanf("%d", &newPreparationTime);
            if (newPreparationTime >= 0) {
                dishes[i].preparation_time = newPreparationTime;
            }

            printf("Dish '%s' updated successfully!\n", dishes[i].name);
            break;
        }
    }

    if (!found) {
        printf("Dish with ID '%s' not found.\n", dishId);
    }
}


// Function to delete a dish
void deleteDish(struct Dish dishes[], int *dishCount) {
    if (*dishCount == 0) {
        printf("No dishes available to delete.\n");
        return;
    }

    char dishId[10];
    int found = 0;

    // Input the dish ID to be deleted
    printf("Enter dish ID to delete: ");
    scanf("%s", dishId);

    // Search for the dish with the given ID
    for (int i = 0; i < *dishCount; i++) {
        if (strcmp(dishes[i].id, dishId) == 0) {
            found = 1;

            // Shift dishes to remove the deleted dish
            for (int j = i; j < *dishCount - 1; j++) {
                dishes[j] = dishes[j + 1];
            }

            (*dishCount)--; // Decrease dish count
            printf("Dish with ID '%s' has been deleted successfully!\n", dishId);
            break;
        }
    }

    if (!found) {
        printf("Dish with ID '%s' not found.\n", dishId);
    }
}


// Function to view all dishes
void viewAllDishes(struct Dish dishes[], int dishCount) {
    if (dishCount == 0) {
        printf("No dishes available to display.\n");
        return;
    }

    printf("\n=== List of Dishes ===\n");
    printf("%-10s %-50s %-100s %-10s %-15s\n", "ID", "Name", "Description", "Price", "Prep Time");
    printf("------------------------------------------------------------------------------------\n");

    // Loop through the dishes array and print details of each dish
    for (int i = 0; i < dishCount; i++) {
        printf("%-10s %-50s %-100s $%-9.2f %d mins\n",
               dishes[i].id,
               dishes[i].name,
               dishes[i].description,
               dishes[i].price,
               dishes[i].preparation_time);
    }
}


// Function to search for dishes by name or ID
void searchDishes(struct Dish dishes[], int dishCount) {
    if (dishCount == 0) {
        printf("No dishes available to search.\n");
        return;
    }

    char searchTerm[50];
    printf("Enter the dish name or ID to search: ");
    scanf(" %[^\n]", searchTerm);  // Read a string with spaces

    int found = 0; // Flag to check if any dish is found

    printf("\n=== Search Results ===\n");
    printf("%-10s %-50s %-100s %-10s %-15s\n", "ID", "Name", "Description", "Price", "Prep Time");
    printf("------------------------------------------------------------------------------------\n");

    // Loop through the dishes array to find matches
    for (int i = 0; i < dishCount; i++) {
        // Check if the name or ID matches the search term
        if (strcasecmp(dishes[i].name, searchTerm) == 0 || strcasecmp(dishes[i].id, searchTerm) == 0) {
            printf("%-10s %-50s %-100s $%-9.2f %d mins\n",
                   dishes[i].id,
                   dishes[i].name,
                   dishes[i].description,
                   dishes[i].price,
                   dishes[i].preparation_time);
            found = 1; // Set found flag to true
        }
    }

    if (!found) {
        printf("No matching dishes found for '%s'.\n", searchTerm);
    }
}


// Function to view detailed information about a specific dish by ID
void viewDishInformation(struct Dish dishes[], int dishCount) {
    if (dishCount == 0) {
        printf("No dishes available to view.\n");
        return;
    }

    char dishID[10];
    printf("Enter the dish ID to view its information: ");
    scanf("%s", dishID);

    int found = 0; // Flag to check if the dish is found

    // Loop through the dishes array to find the dish by ID
    for (int i = 0; i < dishCount; i++) {
        if (strcmp(dishes[i].id, dishID) == 0) { // Check if IDs match
            printf("\n=== Dish Information ===\n");
            printf("ID: %s\n", dishes[i].id);
            printf("Name: %s\n", dishes[i].name);
            printf("Description: %s\n", dishes[i].description);
            printf("Price: $%.2f\n", dishes[i].price);
            printf("Preparation Time: %d mins\n", dishes[i].preparation_time);
            found = 1; // Set found flag to true
            break; // Exit loop after finding the dish
        }
    }

    if (!found) {
        printf("No dish found with ID '%s'.\n", dishID);
    }
}


// Function to view sales report based on orders
void viewSalesReport(struct Order orders[], int orderCount, struct Dish dishes[], int dishCount) {
    printf("\n=== Sales Report ===\n");
    printf("ID\tCustomer Name\tAddress\t\tDish ID\tStatus\n");
    for (int i = 0; i < orderCount; i++) {
        printf("%s\t%s\t%s\t%s\t%s\n",
               orders[i].id,
               orders[i].customer_name,
               orders[i].address,
               orders[i].dish_id,
               orders[i].status == 1 ? "Placed" : "Canceled");
    }

    // If you need to display dish details as well
    printf("\n=== Dishes Sold ===\n");
    for (int i = 0; i < orderCount; i++) {
        for (int j = 0; j < dishCount; j++) {
            if (strcmp(orders[i].dish_id, dishes[j].id) == 0) {
                printf("Dish ID: %s, Name: %s, Price: %.2f\n",
                       dishes[j].id,
                       dishes[j].name,
                       dishes[j].price);
            }
        }
    }
}

// Function to place an order
void placeOrder(struct Order orders[], int *orderCount, struct Dish dishes[], int dishCount) {
    if (*orderCount >= MAX_ORDERS) {
        printf("Order limit reached. Cannot place more orders.\n");
        return;
    }

    struct Order newOrder;
    char dishID[10];

    // Get customer details
    printf("Enter your name: ");
    scanf(" %[^\n]", newOrder.customer_name);
    printf("Enter your address: ");
    scanf(" %[^\n]", newOrder.address);
    printf("Enter your contact number: ");
    scanf(" %[^\n]", newOrder.contact_number);

    // Display available dishes
    printf("\nAvailable Dishes:\n");
    for (int i = 0; i < dishCount; i++) {
        printf("ID: %s, Name: %s, Price: $%.2f\n", dishes[i].id, dishes[i].name, dishes[i].price);
    }

    // Get the dish ID from the user
    printf("Enter the dish ID you want to order: ");
    scanf("%s", dishID);

    // Validate dish ID
    int dishIndex = -1;
    for (int i = 0; i < dishCount; i++) {
        if (strcmp(dishes[i].id, dishID) == 0) {
            dishIndex = i;
            break;
        }
    }

    if (dishIndex == -1) {
        printf("Invalid dish ID. Order could not be placed.\n");
        return;
    }

    // Set order details
    strcpy(newOrder.id, "ORD");
    sprintf(newOrder.id + 3, "%03d", *orderCount + 1); // Generate a new order ID (ORD001, ORD002, etc.)
    strcpy(newOrder.dish_id, dishID);
    newOrder.status = 1; // Set status to placed

    // Store the new order in the orders array
    orders[*orderCount] = newOrder;
    (*orderCount)++; // Increment the order count

    printf("Order placed successfully! Your order ID is: %s\n", newOrder.id);
}


// Function to cancel an order
void cancelOrder(struct Order orders[], int orderCount) {
    char orderID[10];
    printf("Enter the order ID you want to cancel: ");
    scanf("%s", orderID);

    // Search for the order by ID
    int found = 0;
    for (int i = 0; i < orderCount; i++) {
        if (strcmp(orders[i].id, orderID) == 0) {
            // Mark the order as canceled
            orders[i].status = 0; // Set status to canceled
            found = 1;
            printf("Order ID %s has been canceled successfully.\n", orderID);
            break;
        }
    }

    if (!found) {
        printf("Order ID %s not found. Cancellation failed.\n", orderID);
    }
}


// Function to view all orders
void viewAllOrders(struct Order orders[], int orderCount) {
    if (orderCount == 0) {
        printf("No orders found.\n");
        return;
    }

    printf("\n=== List of All Orders ===\n");
    printf("%-10s %-20s %-20s %-15s %-10s %-10s\n", "Order ID", "Customer Name", "Address", "Contact No", "Dish ID", "Status");
    printf("--------------------------------------------------------------------------------\n");

    for (int i = 0; i < orderCount; i++) {
        // Print order details
        printf("%-10s %-20s %-20s %-15s %-10s %-10s\n",
               orders[i].id,
               orders[i].customer_name,
               orders[i].address,
               orders[i].contact_number,
               orders[i].dish_id,
               (orders[i].status == 1) ? "Placed" : "Canceled");
    }
}