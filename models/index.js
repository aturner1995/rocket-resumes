const Person = require("./person");
const Education = require("./education");
const Overview = require("./overview");
const Skill = require("./skill");
const Work = require("./work");
const Certification = require("./cerification");
const Project = require("./project");
const User = require("./user");
const AiInfo = require("./aiInfo");
const Profilepic = require("./profilepic")

User.hasMany(Person, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Education, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Overview, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(AiInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Skill, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Work, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Certification, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Project, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Person.belongsTo(User, {
  foreignKey: "user_id",
});

Education.belongsTo(User, {
  foreignKey: "user_id",
});

Overview.belongsTo(User, {
  foreignKey: "user_id",
});

AiInfo.belongsTo(User, {
  foreignKey: "user_id",
});

Skill.belongsTo(User, {
  foreignKey: "user_id",
});

Work.belongsTo(User, {
  foreignKey: "user_id",
});

Certification.belongsTo(User, {
  foreignKey: "user_id",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasOne(Profilepic, { 
    foreignKey: "user_id"
 });
Profilepic.belongsTo(User, { 
    foreignKey: "user_id"
 });

module.exports = {
  Person,
  Work,
  Education,
  Certification,
  Overview,
  Skill,
  Project,
  User,
  AiInfo,
};
