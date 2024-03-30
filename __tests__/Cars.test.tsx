import CarCatalog from "@/components/CarCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResults = {
  success: true,
  count: 2,
  data: [
    {
      _id: "1234",
      model: "Model 3",
      description: "Tesla Model 3",
      picture: "https://example.com/picture1.jpg",
      seats: 5,
      doors: 4,
      largebags: 2,
      smallbags: 2,
      automatic: true,
      dayRate: 2500,
      __v: 0,
      id: "1234",
    },
    {
      _id: "5678",
      model: "Model Y",
      description: "Tesla Model Y",
      picture: "https://example.com/picture2.jpg",
      seats: 5,
      doors: 4,
      largebags: 4,
      smallbags: 4,
      automatic: true,
      dayRate: 3500,
      __v: 0,
      id: "5678",
    },
  ],
};

describe("CarCatalog", () => {
  it("should have correct number of cars", async () => {
    const carCatalog = await CarCatalog({ carJson: mockResults });
    render(carCatalog);

    await waitFor(() => {
      const carImages = screen.getAllByRole("img");
      expect(carImages.length).toBe(2);
    });
  });
});
