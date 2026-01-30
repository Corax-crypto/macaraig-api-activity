# RESTful API Activity - [Your Name]

## ✅ Best Practices Implementation

### 1. Environment Variables
- **Q:** Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- **Answer:** Putting `BASE_URI` in `.env` makes the app configurable across environments (development, staging, production) without changing source code. It enables quick reconfiguration for testing, CI, or reverse-proxy setups and keeps environment-specific values centralized.

---

### 2. Resource Modeling
- **Q:** Why did we use plural nouns (e.g., `/dishes`) for our routes?
- **Answer:** REST conventions treat endpoints as collections of resources. Using plural nouns (like `/dishes`) makes it clear the route represents a collection and supports predictable CRUD patterns (GET a list, POST to create, GET/PUT/DELETE by `/dishes/:id` for single items).

---

### 3. Status Codes
- **Q:** When do we use `201 Created` vs `200 OK`?
- **Answer:** Use **`201 Created`** when a request results in creating a new resource (commonly after a successful `POST`). Use **`200 OK`** for successful read operations and for updates where the operation succeeds and returns content.

- **Q:** Why is it important to return `404` instead of just an empty array or a generic error?
- **Answer:** Specific status codes communicate intent to clients:
  - **`404 Not Found`** indicates the requested resource or endpoint does not exist (useful for missing single resources like `/dishes/999`).
  - **Empty array + `200 OK`** is appropriate when a collection endpoint is valid but has no matching items (e.g., query filters that return no results).
  - Returning accurate status codes helps clients handle responses programmatically and avoids ambiguous behavior caused by generic errors.

> 💡 Note: Choose the code that best matches the semantics of the request: a missing resource → `404`, an empty but valid collection → `200` with `[]`.

---

### 4. Testing

![Get Screenshot](image.png)
# macaraig-api-activity
# macaraig-api-activity

git add -A
git commit -m "Initial commit: add README and project files"
