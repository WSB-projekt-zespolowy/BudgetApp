const Income = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    if (!title || !category || !date) {
      return res.status(400).json({
        message: "Title, amount, date and category fields are required.",
      });
    }

    if (isNaN(amount) || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number." });
    }

    const newIncome = new Income({
      title,
      amount,
      category,
      description,
      date,
    });

    await newIncome.save();
    res.status(200).json({ message: "Income added." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedIncome = await Income.findByIdAndDelete(id);
    if (!deletedIncome) {
      return res.status(404).json({ message: "Income not found." });
    }
    res.status(200).json({ message: "Income deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};