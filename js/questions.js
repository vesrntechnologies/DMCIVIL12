let questions = [
  {
    numb: 1,
    question: "What is the name of the rock that marble is extracted?",
    immg: "img1",
    answer: "Metamorphic rock",
    options: ["Metamorphic rock", "Foliated rock", "Sedimentary rock", "Igneous rock"]
  },
  {
    numb: 2,
    question: "What is the name of stone dressing finish shown in the figure?",
    immg: "img2",
    answer: "Reticulated finish",
    options: ["Boasted finish", "Hammer finish", "Reticulated finish", "Polished finish"]
  },
  {
    numb: 3,
    question: "What is the name of the symbol shown in the figure?",
    immg: "img3",
    answer: "Embankment",
    options: ["Cutting", "Embankment", "Culvert", "Bridge"]
  },
  {
    numb: 4,
    question: "What is the name of the scale that is denoted by 5 : 1?",
    immg: "img4",
    answer: "Enlarged scale",
    options: ["Full scale", "Plain scale", "Reduced scale", "Enlarged scale"]
  },
  {
    numb: 5,
    question: "What is known as the capacity of material to permit water to pass through it under pressure?",
    immg: "img5",
    answer: "Permeability",
    options: ["Durability", "Permeability", "Porosity", "Ductility"]
  },
  {
    numb: 6,
    question: "Which test is conducted to know the classification of lime?",
    immg: "img6",
    answer: "Ball test",
    options: ["Ball test", "Visual test", "Impurity test", "Workability test"]
  },
  {
    numb: 7,
    question: "Which BIS code no is recommended for folding of drawing sheets?",
    immg: "img7",
    answer: "IS 11664 - 1986",
    options: ["IS 11664 - 1989", "IS 11664 - 1987", "IS 11664 - 1986", "IS 11664 - 1981"]
  },
  {
    numb: 8,
    question: "What is the untrimmed size of A5 designation drawing sheet?",
    immg: "img8",
    answer: "165 x 240",
    options: ["450 x 625", "330 x 450", "240 x 330", "165 x 240"]
  },
  {
    numb: 9,
    question: "What is the projection if the receding lines are drawn to ½ scale?",
    immg: "img9",
    answer: "Cabinet projection",
    options: ["Cavalier projection", "Cabinet projection", "Clinographic projection", "Axonometric projection"]
  },
  {
    numb: 10,
    question: "Which quadrilateral has all the sides are equal and angles are not at right angles?",
    immg: "img10",
    answer: "Rhombus",
    options: ["Rhombus", "Trapezoid", "Rectangle", "Rhomboid"]
  },
  {
    numb: 11,
    question: "Which rock has main content of calcium carbonate?",
    immg: "img11",
    answer: "Calcareous rocks",
    options: ["Argillaceous rocks", "Siliceous rocks", "Foliated rocks", "Calcareous rocks"]
  },
  {
    numb: 12,
    question: "Where the plan is placed in third angle projection?",
    immg: "img12",
    answer: "Above elevation",
    options: ["Below elevation", "Above elevation", "Left of elevation", "Right of elevation"]
  },
  {
    numb: 13,
    question: "What is the property of material to absorb water vapour from air?",
    immg: "img13",
    answer: "Hygroscopicity",
    options: ["Hygroscopicity", "Water absorption", "Permeability", "Durability"]
  },
  {
    numb: 14,
    question: "Which test is conducted on stone to study minor constituents grain size?",
    immg: "img14",
    answer: "Microscopic test",
    options: ["Freezing", "Smiths", "Microscopic test", "Hardness"]
  },
  {
    numb: 15,
    question: "Name the process of removing about 20 cm depth of soil to a certain area for manufacturing of brick?",
    immg: "img15",
    answer: "Unsoiling",
    options: ["Unsoiling", "Tempering", "Blending", "Cleaning"]
  },
  {
    numb: 16,
    question: "Which cement is more suitable for the construction of chemical plant and furnace?",
    immg: "img16",
    answer: "High alumina cement",
    options: ["Expanding cement", "High alumina cement", "Extra rapid hardening cement", "Hydrophobic cement"]
  },
  {
    numb: 17,
    question: "How the unidirectional system of dimensions are read in engineering drawings?",
    immg: "img17",
    answer: "From the bottom of drawing",
    options: [
      "From the top of the drawing",
      "From left side to right",
      "From the bottom of drawing",
      "From right side to left"
    ]
  },
  {
    numb: 18,
    question: "Which scale is generally used in MAPS?",
    immg: "img18",
    answer: "1:1000000",
    options: ["1:10", "1:100", "1:10000", "1:1000000"]
  },
  {
    numb: 19,
    question: "How many grades are there in a portland cement?",
    immg: "img19",
    answer: "3 grades",
    options: ["2 grades", "3 grades", "4 grades", "5 grades"]
  },
  {
    numb: 20,
    question: "Where is the rear view placed in first angle projection?",
    immg: "img20",
    answer: "Left side of right side view",
    options: [
      "Right side of right side view",
      "Bottom of elevation",
      "Left side of right side view",
      "Top of elevation"
    ]
  },
  {
    numb: 21,
    question: "What percentage of gypsum is added in the manufacturing of cement?",
    immg: "img21",
    answer: "3 - 4 %",
    options: ["7 - 10%", "5 - 7 %", "3 - 4 %", "1 - 2 %"]
  },
  {
    numb: 22,
    question: "Which BIS code is recommended for Engineering drawing practice?",
    immg: "img22",
    answer: "IS: 962- 1989",
    options: ["IS: 9069 - 2001", "IS: 11662 - 1983", "IS: 962- 1989", "IS: 10711 - 1986"]
  },
  {
    numb: 23,
    question: "What is the name of the given architectural symbol shown in figure?",
    immg: "img23",
    answer: "Toilet",
    options: ["Sink", "Wash basin", "Toilet", "Bath tub"]
  },
  {
    numb: 24,
    question: "What is the name of the given architectural symbol shown in figure?",
    immg: "img24",
    answer: "Square dining",
    options: ["Gas stoves", "Closet", "Shower", "Square dining"]
  },
  {
    numb: 25,
    question: "What is the name of the given architectural symbol shown in figure?",
    immg: "img25",
    answer: "Lighting symbols",
    options: ["Floor plan symbols", "Data/Commas/TV symbols", "Lighting symbols", "Electric symbols"]
  },
  {
    numb: 26,
    question: "What is the name of the triangle that has three unequal sides and angles?",
    immg: "img26",
    answer: "Scalene triangle",
    options: ["Scalene triangle", "Isosceles triangle", "Equilateral triangle", "Right angled triangle"]
  },
  {
    numb: 27,
    question: "What is the name of the line shown in figure?",
    immg: "img27",
    answer: "Parallel line",
    options: ["Perpendicular line", "Curved line", "Inclined line", "Parallel line"]
  },
  {
    numb: 28,
    question: "What is the name of the diagram shown in figure?",
    immg: "img28",
    answer: "Trapezoid",
    options: ["Trapezoid", "Rhombus", "Trapezium", "Parallelogram"]
  },
  {
    numb: 29,
    question: "What is the sum of the interior angle of Hexagon corresponding to the external angle?",
    immg: "img29",
    answer: "180o",
    options: ["270o", "90o", "120o", "180o"]
  },
  {
    numb: 30,
    question: "What is the method of dimensioning shown in figure?",
    immg: "img30",
    answer: "Aligned system",
    options: ["Aligned system", "Unidirectional system", "Chain dimension", "Parallel dimension"]
  },
  
    {
      numb: 31,
      question: "What is the name of the diagram shown in figure?",
      immg: "img31",
      answer: "Rhombus",
      options: ["Square", "Rectangle", "Trapezoid", "Rhombus"]
    },
    {
      numb: 32,
      question: "What does the factor 1:1 represents?",
      immg: "img32",
      answer: "Full scale",
      options: ["Enlarging scale", "Reducing scale", "Full scale", "Chord scale"]
    },
    {
      numb: 33,
      question: "What does the factor 2:1 represents?",
      immg: "img33",
      answer: "Enlarging scale",
      options: ["Enlarging scale", "Reducing scale", "Full scale", "Chord scale"]
    },
    {
      numb: 34,
      question: "Which scale is used in the Isometric projection?",
      immg: "img34",
      answer: "Isometric scale",
      options: ["True scale", "Isometric scale", "Vernier scale", "Chord scale"]
    },
    {
      numb: 35,
      question: "Which projection has projector from the object parallel to each other and incline to the plane?",
      immg: "img35",
      answer: "Oblique projection",
      options: ["Isometric projection", "Oblique projection", "Orthographic projection", "Isometric view"]
    },
    {
      numb: 36,
      question: "Which projection has projector from the object perpendicular to the plane?",
      immg: "img36",
      answer: "Orthographic projection",
      options: ["Isometric projection", "Oblique projection", "Orthographic projection", "Perspective projection"]
    },
    {
      numb: 37,
      question: "Which is the other name of the perspective view?",
      immg: "img37",
      answer: "Photographic view",
      options: ["Photographic view", "Oblique view", "Isometric view", "Orthographic view"]
    },
    {
      numb: 38,
      question: "What will be at the same height as that of station point and will lie on the horizon line?",
      immg: "img38",
      answer: "Vanishing point",
      options: ["Focus", "Vanishing point", "Eccentricity", "Station point"]
    },
    {
      numb: 39,
      question: "Where should be the left side view drawn at 3rd angle projection in relation to elevation?",
      immg: "img39",
      answer: "To the left of elevation",
      options: ["Above the elevation", "Below the elevation", "To the right of elevation", "To the left of elevation"]
    },
    {
      numb: 40,
      question: "Where should be the left side view drawn at 1st angle projection in relation to elevation?",
      immg: "img40",
      answer: "To the right of elevation",
      options: ["Above the elevation", "Below the elevation", "To the right of elevation", "To the left of elevation"]
    },
    {
      numb: 41,
      question: "What is the water absorption percentage for bricks?",
      immg: "img41",
      answer: "<16%",
      options: ["<16%", "<30%", ">50%", ">35%"]
    },
    {
      numb: 42,
      question: "What is the recommended slumps of concrete for road construction?",
      immg: "img42",
      answer: "20 to 40",
      options: ["40 to 50", "70 to 80", "30 to 40", "20 to 40"]
    },
    {
      numb: 43,
      question: "What is the part marked as X shown in the figure?",
      immg: "img43",
      answer: "Blocking course",
      options: ["Blocking course", "Cornice", "Corbel", "Lintel"]
    },
    {
      numb: 44,
      question: "What is the part marked as X shown in the figure?",
      immg: "img44",
      answer: "Cornice",
      options: ["Corbel", "Cornice", "Blocking", "String"]
    },
    {
      numb: 45,
      question: "Which metal contains iron as a major content?",
      immg: "img45",
      answer: "Ferrous metal",
      options: ["Brass metal", "Bronze metal", "Zinc", "Ferrous metal"]
    },
    {
      numb: 46,
      question: "Which property of metal has its power of returning to its original shape after the applied force is released?",
      immg: "img46",
      answer: "Elasticity",
      options: ["Malleability", "Tenacity", "Elasticity", "Plasticity"]
    },
    {
      numb: 47,
      question: "Which among the following is an insulator?",
      immg: "img47",
      answer: "Mica",
      options: ["Copper", "Aluminium", "Silver", "Mica"]
    },
    {
      numb: 48,
      question: "What is termed as the quantity of matter contained in a body?",
      immg: "img48",
      answer: "Mass",
      options: ["Density", "Volume", "Mass", "Specific gravity"]
    },
    {
      numb: 49,
      question: "What is called mass per unit volume of a substances?",
      immg: "img49",
      answer: "Density",
      options: ["Mass", "Weight", "Density", "Volume"]
    },
    {
      numb: 50,
      question: "What is the S.I unit of heat?",
      immg: "img50",
      answer: "Joule",
      options: ["Calorie", "Joule", "Centigrade heat unit", "British thermal unit"]
    }
  
  
];
