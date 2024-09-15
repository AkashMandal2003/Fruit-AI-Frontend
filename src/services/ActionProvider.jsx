import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

    this.fruitDetails = {
      Apple: "Apples are one of the most popular fruits in the world, known for their crisp texture and sweet-tart flavor. They are rich in dietary fiber, vitamin C, and potassium. Apples also contain various antioxidants that help reduce the risk of chronic diseases such as heart disease and cancer. With low calorie content, they are commonly eaten raw, used in desserts, or juiced.",
      Banana: "Bananas are a nutrient-dense fruit rich in potassium, vitamin B6, and vitamin C. They provide quick energy from natural sugars, making them ideal for athletes. Bananas also contain pectin and resistant starch, both of which support digestive health. They help in maintaining healthy blood pressure levels and heart function due to their potassium content.",
      Cherry: "Cherries are small, round fruits that are rich in antioxidants, particularly anthocyanins, which help reduce inflammation and improve heart health. They are also a good source of vitamin C, fiber, and melatonin, making them beneficial for immune support and sleep regulation. Cherries can be consumed fresh or used in desserts and beverages.",
      Guava: "Guavas are tropical fruits rich in vitamin C, offering several times more than oranges. They also contain fiber, potassium, and antioxidants that promote heart health, support immunity, and aid digestion. Guavas are known for their sweet and slightly tangy flavor, and are eaten fresh, juiced, or used in jams and desserts.",
      Lichi: "Lichis (or lychees) are small, tropical fruits with a sweet, floral flavor. They are packed with vitamin C, antioxidants, and polyphenols that support immune health and protect against oxidative stress. Lichis are often eaten fresh or added to beverages and desserts, offering a refreshing burst of sweetness.",
      Avocado: "Avocados are a nutrient-rich fruit known for their high content of heart-healthy monounsaturated fats, which help lower bad cholesterol levels. They are also rich in fiber, potassium, and vitamins C, E, and K. Avocados support weight management, enhance nutrient absorption, and promote heart health. They are often used in salads, sandwiches, and as spreads.",
      Strawberry: "Strawberries are bright red, juicy fruits packed with antioxidants such as anthocyanins and ellagic acid, which have anti-inflammatory properties. They are an excellent source of vitamin C, manganese, and fiber. Strawberries are enjoyed fresh, in smoothies, desserts, and as a topping for cereals or salads.",
      Watermelon: "Watermelons are refreshing fruits made up of 92% water, making them hydrating and ideal for hot weather. They are rich in vitamins A and C, as well as antioxidants like lycopene, which is known for its heart-protective properties. Watermelon also contains amino acids that help improve blood flow and muscle recovery.",
      Kiwi: "Kiwis are small, nutrient-packed fruits known for their vibrant green color and tart-sweet taste. They are rich in vitamin C, fiber, and antioxidants, and support immune function, digestion, and skin health. The high vitamin K content in kiwis also aids in bone health. Kiwis can be eaten fresh, in fruit salads, or juiced.",
      Blueberry: "Blueberries are small, nutrient-dense berries that are one of the best sources of antioxidants, particularly anthocyanins, which are linked to heart health and cognitive function. They are also high in vitamins C and K, as well as fiber. Blueberries are often eaten fresh, added to cereals, yogurt, or smoothies.",
      Papaya: "Papayas are tropical fruits that are rich in digestive enzymes, particularly papain, which aids in protein digestion. They are also high in vitamins C and A, as well as antioxidants that support skin health and reduce inflammation. Papayas have a sweet, musky flavor and are commonly eaten fresh or used in salads, smoothies, and desserts."
    };

    this.dietPlans = {
      weightLoss: [
        "Apple: Low in calories and high in fiber, apples are great for weight loss as they keep you full longer.",
        "Strawberry: Packed with antioxidants and low in calories, strawberries make a healthy snack that helps with weight management.",
        "Watermelon: High in water content and low in calories, watermelon helps keep you hydrated and satisfied without adding extra calories.",
        "Kiwi: Rich in fiber and low in calories, kiwi aids digestion and promotes a feeling of fullness.",
        "Guava: High in fiber and vitamin C, guava can help with weight management and support overall health."
      ],
      weightGain: [
        "Banana: High in natural sugars and calories, bananas provide quick energy and help in weight gain.",
        "Avocado: Loaded with healthy fats and calories, avocados are ideal for increasing calorie intake in a nutritious way.",
        "Papaya: Rich in vitamins and natural sugars, papaya can help add calories and nutrients to your diet.",
        "Blueberry: Although low in calories, blueberries are packed with nutrients and can be added to high-calorie smoothies.",
        "Cherry: High in natural sugars and antioxidants, cherries can be included in a calorie-dense diet for weight gain."
      ]
    };
  }

  greet() {
    const message = this.createChatBotMessage("Hello! I'm here to assist you with fruit information. Type 'fruits' to see a list of fruits and write fruit name to see details. Type 'diet' for diet plan..");
    this.updateChatbotState(message);
  }

  help() {
    const message = this.createChatBotMessage("I can help you with fruit details and diet plans. Type 'diet' to choose between weight loss and weight gain.");
    this.updateChatbotState(message);
  }

  showFruitsList() {
    const message = this.createChatBotMessage("Here are some fruits you can ask about:", {
      widget: "fruitsList",
    });
    this.updateChatbotState(message);
  }

  showFruitDetails(fruit) {
    const details = this.fruitDetails[fruit] || "Details not available";
    const message = this.createChatBotMessage(`Here are the details for ${fruit}: ${details}`);
    this.updateChatbotState(message);
  }

  showDietOptions() {
    const message = this.createChatBotMessage("Choose a diet plan: Type 'weight loss' for a weight loss plan or 'weight gain' for a weight gain plan.");
    this.updateChatbotState(message);
  }

  showDietPlan(type) {
    const dietPlan = this.dietPlans[type] || ["Diet plan not available"];
    const message = this.createChatBotMessage(`Here is a fruit-based diet plan for ${type.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${dietPlan.join(' | ')}`);
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
