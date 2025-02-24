const facts = [
    "Elephants are the only mammals that can't jump.",
    "Octopuses have three hearts and blue blood.",
    "A group of flamingos is called a 'flamboyance.'",
    "Crows are known to use tools to obtain food, similar to humans.",
    "A blue whale's heart is as big as a small car!",
    "Kangaroos can't walk backward.",
    "Giraffes only need 5 to 30 minutes of sleep a day.",
    "Sloths only defecate once a week and it can take up to 30 minutes to do so.",
    "Penguins propose to their mates with a pebble.",
    "Honeybees can recognize human faces."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
}