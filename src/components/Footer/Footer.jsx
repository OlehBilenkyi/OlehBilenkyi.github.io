import React from "react";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t mt-16">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Oleh Bilenkyi. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="mailto:oleh.dev@gmail.com"
            className="text-blue-600 hover:underline"
          >
            ✉️ Написать мне
          </a>
        </div>
      </div>
    </footer>
  );
}
