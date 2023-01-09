provider "google" {
  project     = "wildcard-305203"
}



// ------------------------------------------------------------------
// --------------------- Cloud repositories -------------------------
// ------------------------------------------------------------------


resource "google_sourcerepo_repository" "my-repo" {
  name = "my/repository"
}



// ---------------------------------------------------------
// --------------------- Cloud run -------------------------
// ---------------------------------------------------------

resource "google_cloud_run_service" "default" {
  name     = "cloudrun-srv"
  location = "us-central1"

  metadata {
    namespace = "my-project-name"
  }

  template {
    spec {
      containers {
        image = "us-docker.pkg.dev/cloudrun/container/hello"
      }
    }
  }
}

resource "google_cloud_run_domain_mapping" "default" {
  location = "us-central1"
  name     = "verified-domain.com"

  metadata {
    namespace = "my-project-name"
  }

  spec {
    route_name = google_cloud_run_service.default.name
  }
}


// ------------------------------------------------------------------------
// --------------------- Cloud container registry -------------------------
// ------------------------------------------------------------------------

resource "google_container_registry" "registry" {
  project  = "my-project"
  location = "EU"
}
