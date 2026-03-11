# RESTful API Activity - Marc Reiven Macaraig

## ✅ Best Practices Implementation

### 1. Environment Variables
**Q:** Why put `BASE_URI` in `.env` instead of hardcoding it?  
**Answer:** It lets us change settings for different environments (dev, test, prod) without changing the code. This makes the app easier to manage and deploy.

---

### 2. Resource Modeling
**Q:** Why use plural names like `/dishes`?  
**Answer:** Plural names follow REST standards and clearly represent a collection of items. This makes the API easier to understand and use.

---

### 3. Status Codes
**Q:** When should we use `201 Created` vs `200 OK`?  
**Answer:**  
- Use **`201 Created`** when a new resource is successfully created.  
- Use **`200 OK`** when a request succeeds, such as fetching or updating data.

**Q:** Why return `404 Not Found` instead of an empty result?  
**Answer:**  
- **`404 Not Found`** means the requested item does not exist.  
- **`200 OK` with an empty array** means the request was valid, but there is no data to return.  
Using the correct status code helps clients understand what really happened.

---

### 4. Testing
![Get Screenshot](image.png)

---

### 5. Design Decisions

**Q:** Why did I choose to **Embed the Reviews**?  
**Answer:**  
- Reviews are tightly coupled with a dish.  
- They are usually fetched together with the dish.  
- Embedding improves performance by avoiding extra queries.  
- Reviews don’t need to exist independently outside of a dish.

**Q:** Why did I choose to **Reference the Chef**?  
**Answer:**  
- A chef can create multiple dishes.  
- Chef data should not be duplicated in every dish.  
- Updating chef info in one place keeps data consistent.  
- Using references with `.populate()` allows fetching chef details when needed.

## Authentication & Authorization

In our code, authentication is the process of verifying a user’s identity. When a user logs in with their email and password, the system checks the credentials against the database to confirm they are valid. Once a user is authenticated, authorization determines what actions they are allowed to perform. For example, the protect middleware ensures that only authenticated users can access certain routes, while the authorize middleware checks the user’s role (such as admin or manager) to allow or block actions like creating or deleting dishes. This separation ensures security by letting only the right users perform sensitive operations while still allowing general access to public data.

## Security (bcrypt)

We use bcryptjs to hash passwords instead of saving them as plain text in MongoDB for security reasons. Storing plain text passwords is extremely risky because anyone who gains access to the database could see all user passwords. By hashing passwords with bcrypt, the original password is converted into a secure, irreversible string. During login, bcrypt.compare() is used to check if the entered password matches the hashed version in the database. This approach keeps user credentials safe even if the database is compromised.

## JWT Structure

The protect middleware handles JSON Web Tokens (JWTs) to secure our routes. When it receives a JWT from the client, it first verifies that the token exists in the Authorization header and then checks its validity using the secret key. If the token is valid, the middleware decodes the user information (such as _id and role) and attaches it to req.user, allowing subsequent middleware or route handlers to know which user is making the request. If the token is missing or invalid, the middleware blocks access and returns a 401 Unauthorized error, preventing unauthorized users from accessing protected routes.
