export async function GET() {
  try {
    const response = await fetch("https://internshala.com/hiring/search", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://internshala.com/",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Internshala API responded with ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching internships:", error);
    return Response.json(
      { error: "Failed to load internships. Please try again." },
      { status: 500 }
    );
  }
}
