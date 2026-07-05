const mongoose = require("mongoose");\nconst Note = require("../models/note.model");\n\nconst createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required", data: null });
    }
    const note = await Note.create({ title, content, category, isPinned });
    res.status(201).json({ success: true, message: "Note created successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst createBulkNotes = async (req, res) => {
  try {
    const { notes } = req.body;
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({ success: false, message: "notes array is required and cannot be empty", data: null });
    }
    const insertedNotes = await Note.insertMany(notes);
    res.status(201).json({ success: true, message: `${insertedNotes.length} notes created successfully`, data: insertedNotes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note fetched successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst replaceNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true, overwrite: true, runValidators: true });
    if (!updatedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note replaced successfully", data: updatedNote });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    if (Object.keys(req.body).length === 0) return res.status(400).json({ success: false, message: "No fields provided to update", data: null });
    const patchedNote = await Note.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true });
    if (!patchedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note updated successfully", data: patchedNote });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note deleted successfully", data: null });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst deleteBulkNotes = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) return res.status(400).json({ success: false, message: "ids array is required and cannot be empty", data: null });
    for (let i = 0; i < ids.length; i++) {
      if (!mongoose.Types.ObjectId.isValid(ids[i])) return res.status(400).json({ success: false, message: "Invalid note ID format", data: null });
    }
    const result = await Note.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, message: `${result.deletedCount} notes deleted successfully`, data: null });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getNotesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const validCategories = ["work", "personal", "study"];
    if (!validCategories.includes(category)) return res.status(400).json({ success: false, message: "Invalid category. Allowed: work, personal, study", data: null });
    const notes = await Note.find({ category });
    if (notes.length === 0) return res.status(404).json({ success: false, message: `No notes found for category: ${category}`, data: null });
    res.status(200).json({ success: true, message: `Notes fetched for category: ${category}`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getNotesByStatus = async (req, res) => {
  try {
    const { isPinned } = req.params;
    if (isPinned !== "true" && isPinned !== "false") return res.status(400).json({ success: false, message: "isPinned must be true or false", data: null });
    const pinned = isPinned === "true";
    const notes = await Note.find({ isPinned: pinned });
    res.status(200).json({ success: true, message: "Fetched all pinned notes", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getNoteSummary = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const note = await Note.findById(id).select("title category isPinned createdAt");
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note summary fetched successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst filterNotes = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.isPinned !== undefined) filter.isPinned = req.query.isPinned === "true";
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst getPinnedNotes = async (req, res) => {
  try {
    const filter = { isPinned: true };
    if (req.query.category) filter.category = req.query.category;
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Pinned notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst filterByCategory = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ success: false, message: "Query param 'name' is required", data: null });
    const notes = await Note.find({ category: name });
    res.status(200).json({ success: true, message: `Notes filtered by category: ${name}`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst filterByDateRange = async (req, res) => {
  try {
    const { from, to } = req.query;
    if (!from || !to) return res.status(400).json({ success: false, message: "Both 'from' and 'to' query params are required", data: null });
    const filter = {
      createdAt: {
        $gte: new Date(from),
        $lte: new Date(to)
      }
    };
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: `Notes fetched between ${from} and ${to}`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst paginateNotes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await Note.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find().skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst paginateByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filter = { category };
    const total = await Note.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find(filter).skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      message: `Notes fetched for category: ${category}`,
      data: notes,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst sortNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    if (!allowed.includes(sortBy)) return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    const notes = await Note.find().sort({ [sortBy]: order });
    res.status(200).json({ success: true, message: `Notes sorted by ${sortBy} in ${req.query.order === 'asc' ? 'ascending' : 'descending'} order`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nconst sortPinnedNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    if (!allowed.includes(sortBy)) return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    const notes = await Note.find({ isPinned: true }).sort({ [sortBy]: order });
    res.status(200).json({ success: true, message: `Pinned notes sorted by ${sortBy} in ${req.query.order === 'asc' ? 'ascending' : 'descending'} order`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};\n\nmodule.exports = { createNote, createBulkNotes, getAllNotes, getNoteById, replaceNote, updateNote, deleteNote, deleteBulkNotes, getNotesByCategory, getNotesByStatus, getNoteSummary, filterNotes, getPinnedNotes, filterByCategory, filterByDateRange, paginateNotes, paginateByCategory, sortNotes, sortPinnedNotes };\n