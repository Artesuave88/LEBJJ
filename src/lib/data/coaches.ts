import mikeyDeanPhoto from "$lib/assets/coaches/mikey_dean.png";
import sianDeanPhoto from "$lib/assets/coaches/sian_dean.png";
import michaelStevensonPhoto from "$lib/assets/coaches/michael_stevenson.png";
import markKiddPhoto from "$lib/assets/coaches/mark_kidd.png";
import benSmedleyPhoto from "$lib/assets/coaches/ben_smedley.png";
import jamesLewisPhoto from "$lib/assets/coaches/james_lewis.png";
import danPhoto from "$lib/assets/coaches/dan.png";

export type instructor = {
  id: string;
  name: string;
  beltRank: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo?: string;
  photoPosition?: string;
};

export const instructors: instructor[] = [
  {
    id: "mikey-dean",
    name: "Mikey Dean",
    beltRank: "3rd Degree Black Belt",
    role: "Head Instructor / Owner",
    shortBio:
      "Head instructor with over 25 years of BJJ experience, leading fundamentals and long-term development.",
    fullBio:
      "Mikey has been training BJJ for over 25 years and leads the instruction at Long Eaton BJJ, with a strong focus on technical detail, clear progression and high standards on and off the mat. He and Sian are married, and their two daughters also train.",
    photo: mikeyDeanPhoto,
  },

  {
    id: "michael-stevenson",
    name: "Michael Stevenson",
    beltRank: "2nd Degree Black Belt",
    role: "Instructor",
    shortBio:
      "Supports adult and developing students with structured, practical instruction and active competition experience.",
    fullBio:
      "Michael brings a technical and supportive approach to instruction, helping students sharpen fundamentals while building confidence in live training. He competes regularly, and his daughter also trains at the academy.",
    photo: michaelStevensonPhoto,
    photoPosition: "center top",
  },

  {
    id: "mark-kidd",
    name: "Mark Kidd",
    beltRank: "2nd Degree Black Belt",
    role: "Instructor",
    shortBio:
      "Experienced black belt coaching BJJ and FrostFit classes, and founder of the kids program.",
    fullBio:
      "Mark brings years of grappling experience and can be found coaching FrostFit classes as well as BJJ sessions across the timetable. He also started the kids program and continues to support its development.",
    photo: markKiddPhoto,
    photoPosition: "center top",
  },
  {
    id: "ben-smedley",
    name: "Ben Smedley",
    beltRank: "2nd Degree Black Belt",
    role: "Instructor",
    shortBio:
      "Ben's main focus is the juniors team, and he also coaches FrostFit and adult classes.",
    fullBio:
      "Ben's main love is teaching juniors, where he helps young athletes build strong fundamentals, confidence and a love for the sport. He also often teaches FrostFit and adult classes.",
    photo: benSmedleyPhoto,
    photoPosition: "right top",
  },
  {
    id: "james-lewis",
    name: "James Lewis",
    beltRank: "1st Degree Black Belt",
    role: "Instructor",
    shortBio:
      "Black belt with over 25 years of BJJ experience, teaching both adults and kids/teens classes.",
    fullBio:
      "James has over 25 years of BJJ experience and teaches both the adults and kids/teens classes at the academy. He brings a practical, technical instruction style that helps students build strong fundamentals and apply them effectively in live training.",
    photo: jamesLewisPhoto,
    photoPosition: "center top",
  },
  {
    id: "sian-dean",
    name: "Sian Dean",
    beltRank: "Purple Belt",
    role: "Instructor",
    shortBio:
      "Teaches juniors and ladies classes with clear, supportive instruction.",
    fullBio:
      "Sian teaches juniors and ladies classes, helping students build strong fundamentals, confidence and safe training habits in every session. She and Mikey are married, and their two daughters also train.",
    photo: sianDeanPhoto,
    photoPosition: "center top",
  },
  {
    id: "emma",
    name: "Emma",
    beltRank: "Brown Belt",
    role: "Instructor",
    shortBio:
      "Highest graded female instructor and founder of the ladies program.",
    fullBio:
      "Emma is a brown belt who started our ladies program and is the highest graded female at the academy. She teaches juniors, teens and ladies classes, helping students build confidence, technical fundamentals and safe training habits in every session.",
    photoPosition: "center top",
  },
  {
    id: "dan",
    name: "Dan Mackey",
    beltRank: "Black Belt",
    role: "Instructor",
    shortBio: "Black belt instructor who is usually leading the No-Gi classes.",
    fullBio:
      "Dan is a black belt and can usually be found running the No-Gi classes, helping students develop timing, pressure and practical grappling skills for live training.",
    photo: danPhoto,
    photoPosition: "center top",
  },
];

const privateInstructorIds = new Set(["michael-stevenson", "emma", "dan"]);

export const privateInstructors = instructors.filter((instructor) =>
  privateInstructorIds.has(instructor.id),
);

export function offersPrivateSessions(instructorId: string): boolean {
  return privateInstructorIds.has(instructorId);
}
