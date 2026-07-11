# Velocity

Velocity is a lean product scaffolding app for founders, builders, and teams who want to turn a rough idea into an MVP-ready scope in seconds.

Instead of asking users to plan the whole product, Velocity asks one simple question: "What are we shipping today?" It then refines that idea into crisp user stories and a pragmatic tech stack recommendation.

## What this app does

- Takes a rough app concept from the user.
- Distills it into 3–4 core user stories focused on the absolute minimum viable product.
- Evaluates whether the scope is lean or if there is unnecessary complexity.
- Rewrites the scope once or twice until the MVP is tighter.
- Recommends a fast-shipping technology stack that matches the lean scope.

## Why it exists

Velocity is built for product people who need to move from "what if" to "what to build" without over-engineering the solution.

It helps teams avoid the two biggest startup traps:

- Spending too much time drafting a perfect plan before validating the core value.
- Choosing a stack that is flashy instead of shipping quickly.

## How we built it

We built Velocity like a product engine, not just a code sample.

### Frontend

The mobile-first experience is built with Expo and React Native so it feels polished on iOS, Android, and web without duplicating work.

From the product perspective, the app is intentionally simple:

- one screen to enter the app idea
- one submit action to generate the MVP architecture
- one results view showing core user stories and the recommended stack
- a reset flow to quickly try a new idea

### Backend

The backend is an agent-driven API that treats idea shaping like a product conversation.

- It receives the raw idea.
- It runs a small workflow that writes user stories, evaluates the scope, and recommends a stack.
- It loops only when the scope needs tightening, keeping the output focused and actionable.

### AI workflow

The core product logic lives in a workflow that uses an LLM to do three things:

1. Convert the raw idea into MVP user stories.
2. Score the scope and offer feedback if it is too bloated.
3. Recommend a technology stack optimized for speed and simplicity.

The workflow is intentionally conservative: it will rewrite only when the scope is not lean, and it avoids endless iterations.

## Product experience

Velocity is designed to feel like an MVP advisor:

- Founders can test dozens of ideas quickly.
- PMs can validate whether a scope is truly minimal.
- Designers and engineers can start planning from a clear set of stories and a stack recommendation.

## Who should use it

This product is for:

- early-stage founders validating a new product concept
- product managers sketching an MVP before kickoff
- innovation teams looking for quick idea vetting
- anyone who wants a neutral, fast way to scope an app without overbuilding

## Getting started

To run it locally, start the backend and then launch the Expo app. The frontend calls the API and shows the agent’s recommended architecture in the app.

## What this README is not

It is not a technical spec. It is a product story: why Velocity exists, what it delivers, and how it helps teams move from idea to MVP architecture faster.
