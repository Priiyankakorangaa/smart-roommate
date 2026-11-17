Smart Roommate & Accommodation Management System

A web-based platform that helps students find compatible roommates, manage accommodation details, track shared expenses, send roommate requests, and communicate efficiently, creating a safer and more organized living experience.

Live demo: https://priiyankakorangaa.github.io/smart-roommate/login.html

Features:
Account system: sign up and log in with a college email
Roommate matching: compatibility score based on budget, sleep schedule, tidiness, smoking and study style
Roommate requests: send, receive, accept or decline requests
Accommodation management: store address, rent, rooms, landlord contact and house rules
Shared expenses: add expenses, split them equally and see who owes whom
House chat: group chat for housemates
Tech stack
HTML, CSS and vanilla JavaScript (no build step)
Supabase for authentication and database
GitHub Pages for hosting
Project structure
File	Purpose
index.html	Main app (matches, requests, home, expenses, chat)
login.html	Log in and create account page
auth.js	Authentication helper and Supabase configuration
Run it locally
Download or clone this repository.
Open login.html in your browser.

With no Supabase keys set, the app runs in demo mode and saves data in your own browser only.

Enable real accounts (Supabase)
Create a free project at supabase.com.
Go to Project Settings → API and copy the Project URL and the anon public key.
Paste them into the top of auth.js.
In Authentication → URL Configuration, set the Site URL to your GitHub Pages link.

Only use the anon key in this repository. Never commit the service_role key.

Roadmap
[x] Login and sign-up
[ ] Shared database for profiles, requests, expenses and chat
[ ] Row-level security so users only see their own household data
[ ] Report and block users
[ ] Admin moderation panel
Author

Built by Priyanka koranga
