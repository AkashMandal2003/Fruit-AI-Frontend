class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("help")) {
      this.actionProvider.help();
    } else if (lowerCaseMessage.includes("fruit")) {
      this.actionProvider.showFruitsList();
    } else if (lowerCaseMessage.includes("diet")) {
      this.actionProvider.showDietOptions();
    } else if (lowerCaseMessage.includes("weight loss")) {
      this.actionProvider.showDietPlan('weightLoss');
    } else if (lowerCaseMessage.includes("weight gain")) {
      this.actionProvider.showDietPlan('weightGain');
    } else {
      const fruitNames = ["apple", "banana", "cherry", "guava", "lichi", "avocado", "strawberry", "watermelon", "kiwi", "blueberry", "papaya"];
      fruitNames.forEach(fruit => {
        if (lowerCaseMessage.includes(fruit)) {
          this.actionProvider.showFruitDetails(fruit.charAt(0).toUpperCase() + fruit.slice(1));
        }
      });
    }
  }
}

export default MessageParser;
