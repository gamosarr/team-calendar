export async function getIssues() {
  const response = await fetch(
    "https://api.github.com/repos/gamosarr/team-calendar/issues"
  );

  return response.json();
}