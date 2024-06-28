<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
              <img src="https://simanyests.github.io/Images/images/Screenshot 2024-05-07 141157.png" alt="logo" class="img-fluid"
                  loading="lazy">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#landing">
                          <i class="bi bi-house-door">
                              Home
                          </i>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#about">
                          <i class="bi bi-file-person-fill">
                              About
                          </i>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#resume">
                          <i class="bi bi-file-person">
                              Resume
                          </i>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#project">
                          <i class="bi bi-cast">
                              Project
                          </i>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#testimonials">
                          <i class="bi bi-yelp">
                              Testimonials
                          </i>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#reachMe">
                          <i class="bi bi-person-lines-fill">
                              Reach me
                          </i>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>
