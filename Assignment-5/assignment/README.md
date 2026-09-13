# 🧱 DevStack — Developer Stack Builder

A modern, responsive web application for developers to explore, compare, and assemble their ideal software development technology stack.

---

## 📖 Project Description

**DevStack** is an interactive web tool built to help developers and teams curate and visualize their technology choices across frontend frameworks, backend engines, databases, languages, styling libraries, and DevOps tooling. With real-time stack curation, instant duplicate protection, and dynamic visual indicators, DevStack simplifies decision-making for your next software project.

---

## 🛠️ Technologies Used

- **React.js (v19 / Vite)**: Fast modern component-based UI library and lightning-fast development build tool.
- **Tailwind CSS (v3)**: Utility-first styling with unified design tokens and responsive breakpoints.
- **Single-Source CSS Custom Properties**: Re-theme the entire application (orange → pink → violet) from a single variable.
- **React-Toastify**: Rich, accessible notification alerts for user interactions.
- **Lucide React**: Crisp vector iconography for ratings, actions, and status indicators.
- **JSON Data Layer**: Clean external JSON architecture loaded dynamically via React hooks.

---

## ✨ 3 Core Features

1. **Interactive Stack Builder with Duplicate Prevention**:
   Add technologies to your customized stack sidebar with a single click. The UI prevents duplicate entries by disabling the card button with a `✓ Added to Stack` indicator and displaying contextual alerts.

2. **Unified Gradient Brand Theme**:
   The entire application leverages a shared tri-color gradient (`#FF5A36` → `#E11D74` → `#8538DC`) defined in a single CSS variable. Changing this single value instantly updates the logo, headlines, and primary actions across the site.

3. **Real-time Feedback & Dynamic States**:
   Includes an animated loading spinner during asynchronous data fetching, empty-state placeholder illustrations when no technologies are selected, and responsive desktop/tablet/mobile layouts with mobile drawer navigation.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:**
JSX stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript files.

**Why it is used:**
- It makes UI code intuitive and readable by placing layout structure alongside component logic.
- JSX prevents injection attacks (XSS) by automatically escaping values before rendering.
- It transforms into standard `React.createElement()` calls behind the scenes for optimal browser performance.

---

### 2. What is the difference between props and state?
**Answer:**
- **Props (Properties):** Read-only data passed downwards from a parent component to a child component. Props cannot be modified by the receiving child component (immutable from the child's perspective).
- **State:** Internal data managed within a component that can change over time based on user interactions, network requests, or timers. When state updates via its setter function, React re-renders the component to display the new data.

| Feature | Props | State |
| :--- | :--- | :--- |
| **Origin** | Passed from parent | Managed inside component |
| **Mutability** | Read-only / Immutable | Mutable via setter function |
| **Triggers Re-render** | Yes (when new props received) | Yes (when state updates) |

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:**
The `useState` hook is a built-in React hook that allows functional components to maintain and update local state. It returns an array with two elements: the current state value and a function to update that value.

**Where it was used in this project:**
1. `const [technologies, setTechnologies] = useState([])`: Stores the list of tech cards fetched from the JSON file.
2. `const [selectedStack, setSelectedStack] = useState([])`: Tracks which technologies the user has added to their "Your Stack" sidebar.
3. `const [isLoading, setIsLoading] = useState(true)`: Controls whether the loading spinner is displayed while data is being fetched.
4. `const [mobileMenuOpen, setMobileMenuOpen] = useState(false)`: Manages the open/close state of the mobile navbar drawer.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:**
The `useEffect` hook lets developers perform **side effects** in functional components, such as data fetching, manual DOM mutations, subscriptions, or setting up timers.

**Why it was needed for JSON data:**
Fetching external or local JSON files via `fetch()` is an asynchronous side effect. By running the fetch request inside `useEffect` with an empty dependency array (`[]`), React guarantees the data fetching only runs once after the component mounts initially, avoiding infinite re-rendering loops.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:**
React uses the unique `key` prop to identify which items in a list have been changed, added, reordered, or removed during virtual DOM reconciliation (diffing algorithm).
- Without unique keys, React would have to re-render the entire list on every update.
- With unique keys (e.g., `tech.id`), React precisely updates only the affected DOM nodes, ensuring high rendering performance and preserving component state.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:**
**Conditional rendering** is the ability to display different UI elements or components based on specific conditions or state values, using JavaScript operators like ternary (`? :`), logical AND (`&&`), or `if/else`.

**Example in this project:**
In `YourStack.jsx`, conditional rendering displays either the empty dashed box or the list of selected tech items:
```jsx
{count === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-xl py-12 px-4 text-center">
    <p className="text-slate-400 text-sm">Your stack is empty.</p>
  </div>
) : (
  <div className="space-y-3">
    {stack.map((item) => (
      <StackItem key={item.id} item={item} />
    ))}
  </div>
)}
```
Also, the "Remove All" button is only rendered when `count > 0`.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** The parent passes data downwards through **props** (e.g., `<TechnologyCard technology={tech} isAdded={isAdded} />`).
- **Child to Parent:** The parent passes a **callback function** downwards as a prop (e.g., `onAddToStack={handleAddToStack}`). When the child triggers an event (like clicking the "Add to Stack" button), it invokes the callback function with arguments:
  ```jsx
  // Inside Child component (TechnologyCard.jsx):
  <button onClick={() => onAddToStack(technology)}>Add to Stack</button>
  ```
  This communicates the selection back up to the parent component, allowing the parent to update its state.

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/iam-rajuahmmed/programming_hero_practices.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Assignment-5/assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the local development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```
