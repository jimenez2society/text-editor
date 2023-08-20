const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // To store the deferred event

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default prompt

  deferredPrompt = event; // Store the event for later use

  // Update UI to show install button
  butInstall.style.display = 'block';
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation');
    } else {
      console.log('User declined the installation');
    }

    // Clear the deferred event
    deferredPrompt = null;

    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('App was successfully installed');
});
