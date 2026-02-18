# Identifying & Fixing Code Smells

## Common Code Smells

- Bloaters (Excessive Size)

Consist of long methods, massive classes and long parameter lists that becomes too complex over time. This violates the Single Responsibility Principle, since it makes the code extremely difficult to read and understand as well as increasing the chances of errors/bugs popping up if there is a change to the codebase.

- Object-Oriented Abusers

Involves the misuse of object-oriented principles, such as inheritance hierarchies where subclasses don't use their parent's methods. This creates a confusing design, as it makes the code difficult to maintain due to its misuse or overcomplicated principles.

- Change Preventers

This smell makes the codebase resistant to updates since a single rule change in a system will require a lot of modifications in many unrelated places in the codebase. This results to high maintenance costs and making the system fragile where bugs/errors can easily happen during minor changes.

- Dispensables

Involves the use of unnecessary code like duplicated code, dead variables or comments used to explain messy code logic. These elements result in the repository being cluttered, making it harder for you and your team members to navigate the codebase. It also increases the risk of inconsistencies or bugs since there is a chance wherein one version of a duplicated code is updated but the rest are forgotten.

## Code Examples that Demonstrate Code Smells

### Magic Numbers and Strings

```javascript
//Function that calculates the total price of a product
const calculateTotal = (price, type) => {
  if (type === 'VIP_MEMBER') {
    // Magic String
    return price * 0.8; // Magic Number (20% discount)
  }

  if (price > 100) {
    // Magic Number
    return price - 15; // Magic Number
  }

  return price + 5; // Magic Number
};

calculateTotal(120, 'VIP_MEMBER');
```

### Long Functions

```javascript
const processData = (type, value, name) => {
  // Task 1: Validation logic
  if (value < 0 || value > 100) {
    console.error('Invalid value: Value must be between 0 and 100.');
    return;
  }

  if (!name || name.length === 0) {
    console.error('Invalid name: Name cannot be empty.');
    return;
  }

  // Task 2: Handle different types
  switch (type) {
    case 'TYPE_A':
      console.log('Starting heavy processing for Type A...');
      //Insert long logic for processing Type A
      break;

    case 'TYPE_B':
      console.log('Starting heavy processing for Type B...');
      ///Insert long logic for processing Type B
      break;

    default:
      console.warn('Unknown type provided.');
  }

  // Task 3: Logging and Finalization
  console.log(`Processing complete for ${name}`);
};
```

### Duplicate Code

```javascript
const processProductOrder = (price, quantity) => {
  // Logic: 10% discount if total > 100
  let total = price * quantity;
  if (total > 100) {
    total *= 0.9;
  }

  // Logic: Format to currency string
  return `Total: $${total.toFixed(2)}`;
};

const processServiceOrder = (hourlyRate, hours) => {
  // EXACT SAME Logic: 10% discount if total > 100
  let total = hourlyRate * hours;
  if (total > 100) {
    total *= 0.9;
  }

  // EXACT SAME Logic: Format to currency string
  return `Total: $${total.toFixed(2)}`;
};
```

### Large Classes (God Objects)

```javascript
class BarangayBuyManager {
  constructor() {
    this.items = [];
    this.users = [];
  }

  // Responsibility 1: Inventory Management
  addItem(item) {
    /* ... */
  }
  updateStock(id, qty) {
    /* ... */
  }

  // Responsibility 2: User Authentication
  loginUser(email, password) {
    /* ... */
  }
  registerUser(details) {
    /* ... */
  }

  // Responsibility 3: Order Processing
  checkout(cart) {
    /* ... */
  }
  calculateTax(total) {
    /* ... */
  }

  // Responsibility 4: Notifications
  sendEmailConfirmation() {
    /* ... */
  }
  sendSMSAlert() {
    /* ... */
  }
}
```

### Deeply Nested Conditionals

```javascript
let userRole = 'admin';
let accessLevel = 3;
let isAuthenticated = true;

if (isAuthenticated) {
  if (userRole === 'admin') {
    if (accessLevel >= 2) {
      console.log('Admin access granted.');
      if (accessLevel === 3) {
        console.log('Full admin privileges.');
      }
    } else {
      console.log('Insufficient admin access level.');
    }
  } else {
    console.log('Unauthorized access: User is not an admin.');
  }
} else {
  console.log('Unauthorized access: User is not authenticated.');
}
```

### Commented-Out Code

```javascript
const calculatePrice = (price, tax) => {
  // const discount = 0.1;
  // if (price > 100) {
  //   return (price * (1 - discount)) + tax;
  // }

  const finalPrice = price + tax;

  return finalPrice;
};

// console.log(calculatePrice(100, 12));
```

### Inconsistent Naming

```javascript
const calculate_total = (p, qty) => {
  const taxRate = 0.12;
  const final_val = p * qty * (1 + taxRate);

  return final_val;
};

const get_user_data = u_id => {
  // Insert logic to fetch user data
};

const fetchProductInfo = id => {
  // Insert logic to fetch product info
};
```

## Refactored Code Eliminating Code Smells

### Magic Numbers and Strings

```javascript
const VIP_DISCOUNT_RATE = 0.8;
const DISCOUNT_CUTOFF = 100;
const FLAT_DISCOUNT = 25;
const SHIPPING_FEE = 10;

const MEMBERSHIP_TYPES = {
  VIP: 'VIP_MEMBER',
};

// Function that calculates the total price of a product
const calculateTotal = (price, type) => {
  if (type === MEMBERSHIP_TYPES.VIP) {
    return price * VIP_DISCOUNT_RATE;
  }

  if (price > DISCOUNT_CUTOFF) {
    return price - FLAT_DISCOUNT;
  }

  return price + SHIPPING_FEE;
};

calculateTotal(150, 'VIP_MEMBER');
```

### Long Functions

```javascript
//Function for validation logic
const isInputValid = (value, name) => {
  if (value < 0 || value > 100) {
    console.error('Invalid value: Value must be between 0 and 100.');
    return false;
  }
  if (!name || name.length === 0) {
    console.error('Invalid name: Name cannot be empty.');
    return false;
  }
  return true;
};

//Function for Processing Type A
const processTypeA = () => {
  console.log('Starting heavy processing for Type A...');
  // Logic for Type A goes here
};

const processTypeB = () => {
  console.log('Starting heavy processing for Type B...');
  // Logic for Type B goes here
};

//Short and simple version of process data function
const processData = (type, value, name) => {
  if (!isInputValid(value, name)) return;

  const handlers = {
    TYPE_A: processTypeA,
    TYPE_B: processTypeB,
  };

  if (handlers[type]) {
    handlers[type]();
  } else {
    console.warn('Unknown type provided.');
  }

  console.log(`Processing complete for ${name}`);
};
```

### Duplicate Code

```javascript
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.9;

const calculateTotal = subtotal => {
  const finalPrice =
    subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : subtotal;

  return `Total: ₱${finalPrice.toFixed(2)}`;
};

const processProductOrder = (price, quantity) =>
  calculateTotal(price * quantity);
const processServiceOrder = (hourlyRate, hours) =>
  calculateTotal(hourlyRate * hours);

processProductOrder(50, 2);
processServiceOrder(75, 3);
```

### Large Classes (God Objects)

```javascript
class InventoryFeature {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  updateStock(id, qty) {
    //Insert logic to update stock inventory
  }
}

class AuthFeature {
  constructor() {
    this.users = [];
  }

  login(email, password) {
    //Insert logic for authentication user details
  }

  register(details) {
    this.users.push(details);
  }
}

class OrderFeature {
  processCheckout(cart) {
    const total = this.calculateTotal(cart);
    return total;
  }

  calculateTotal(cart) {
    // Insert logic for calculating total amount w/ tax and discounts
  }
}

class NotificationFeature {
  sendEmail(to, message) {
    //Insert logic for sending email notification
  }

  sendSMS(number, message) {
    //Insert logic for sending SMS notification
  }
}
```

### Deeply Nested Conditionals

```javascript
const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
};

const ACCESS_LEVELS = {
  MINIMUM_ADMIN: 2,
  FULL_ADMIN: 3,
};

const checkAccess = (user, access, isAuthenticated) => {
  if (!isAuthenticated) {
    return 'Unauthorized access: User is not authenticated.';
  }

  if (user !== USER_ROLES.ADMIN) {
    return 'Unauthorized access: User is not an admin.';
  }

  if (access < ACCESS_LEVELS.MINIMUM_ADMIN) {
    return 'Insufficient admin access level.';
  }

  if (access === ACCESS_LEVELS.FULL_ADMIN) {
    return 'Admin access granted. Full admin privileges.';
  }

  return 'Admin access granted.';
};

// Testing scenarios
checkAccess(USER_ROLES.ADMIN, ACCESS_LEVELS.FULL_ADMIN, true);
checkAccess(USER_ROLES.CUSTOMER, 1, false);
```

### Commented-Out Code

```javascript
const calculatePrice = (price, tax) => {
  const finalPrice = price + tax;

  return finalPrice;
};

calculatePrice(100, 12);
```

### Inconsistent Naming

```javascript
const taxRate = 0.12;

const users = [
  { id: 1, name: 'Jianna', role: 'Admin' },
  { id: 2, name: 'Monique', role: 'Customer' },
];

const products = [
  { id: 'P01', name: 'Taylor Swift TShirt', price: 50 },
  { id: 'P02', name: 'Sabrina Carpenter Coffee Mug', price: 120 },
];

const calculateTotal = (price, quantity) => {
  const subtotal = price * quantity;
  const total = subtotal * (1 + taxRate);

  return +total.toFixed(2);
};

const getUserData = userId => {
  const user = users.find(user => user.id === userId);
  return user;
};

const getProductData = productId => {
  const product = products.find(product => product.id === productId);
  return product;
};
```

## Reflections on Identifying & Fixing Code Smells

1. What code smells did you find in your code?

Each sample code showcased the following code smells

- Magic Numbers & Strings
- Long Functions
- Duplicate Code
- Large Classes (God Objects)
- Deeply Nested Conditionals
- Commented-Out Code
- Inconsistent Naming

2. How did refactoring improve the readability and maintainability of the code?

Refactoring can improve the readability of the code by transforming the messy and complex logic of the code into a more simple and streamlined structure. By using descriptive naming conventions and breaking down large functions into smaller units that only serve one purpose, this allows the code to be readable and easy to understand for developers throughout the project's development.

Furthermore, refactoring also improves the maintainability of the code through different factors such as eliminating dead code and avoiding duplicated code to name a few. By practicing these techniques, it makes the code easier to fix and change since the code is not only simplified but cleaner to manage. This also reduces the time needed to look for bugs/errors throughout the codebase with the absence of duplicated code. In conclusion, refactoring improves the readability and maintainability of the code as it reduces the code complexity, making adding new features and the debugging process safer and faster to implement.

3. How can avoiding code smells make future debugging easier?

Avoiding code smells can make future debugging easier as it keeps the project's codebase easy to understand, organized and simple to manage. By keeping functions short and having clear names for functions, variables and constants, it allows me and my team to easily find and fix errors quickly without spending extra time trying to decipher the code.

Furthermore, by breaking long functions into smaller, independent pieces, it also helps in finding and fixing bugs since I won't need to worry about breaking other parts in my code base since the bugs are now isolated in one area in my code. Lastly, by removing duplicated or unnecessary lines of code, it ensures me and the rest of my team that an issue in the code can be fixed once, and doesn't need to be fixed again in another section in my code, saving me and my team a lot of time during debugging.
