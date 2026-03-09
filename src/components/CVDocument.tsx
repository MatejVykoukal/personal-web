import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import path from "path";

const avatarSrc = path.resolve(process.cwd(), "public", "me-avatar.jpg");

Font.register({
  family: "Arial",
  fonts: [
    {
      src: "/System/Library/Fonts/Supplemental/Arial.ttf",
      fontWeight: 400,
    },
    {
      src: "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
      fontWeight: 700,
    },
  ],
});

const profile = {
  name: "Matěj Vykoukal",
  title: "Senior Frontend Engineer",
  summary:
    "Senior Frontend Engineer focused on scalable, accessible web products. Most recently at BudgetBakers, I owned Wallet’s frontend and the data queries behind chart rendering and aggregation.",
  email: "matej.vykoukal248@gmail.com",
  website: "matejvykoukal.dev",
};

const projects = [
  {
    name: "Wallet",
    company: "BudgetBakers",
    detail:
      "Core personal finance product with complex flows, performance constraints, and multi-platform UI consistency.",
    role: "Owned the full frontend and database queries for chart rendering and aggregation.",
    tags: "Next.js · TypeScript · CouchDB · PostgreSQL",
  },
  {
    name: "Christie’s Design System",
    company: "ACTUM Digital",
    detail:
      "Premium design system with reusable components, tokenized theming, and governance.",
    role: "Component build-out, Storybook, cross-team reviews.",
    tags: "Design Systems · Storybook · React",
  },
  {
    name: "aria-hooks",
    company: "ACTUM Digital",
    detail:
      "Accessibility-first hooks library that standardizes keyboard and screen reader behavior.",
    role: "Accessibility strategy, reusable utilities, documentation.",
    tags: "Accessibility · React · TypeScript",
  },
];

const experience = [
  {
    company: "BudgetBakers",
    role: "Senior Frontend Engineer",
    period: "2022–2026",
    detail:
      "Owned Wallet’s full frontend and the data queries behind chart rendering and aggregation; delivered internal SaaS portal tooling.",
  },
  {
    company: "ACTUM Digital",
    role: "Frontend Developer",
    period: "2021–2022",
    detail:
      "Built reusable components and accessibility utilities for enterprise clients, with strong documentation and review practices.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2019–2021",
    detail:
      "Delivered websites, landing pages, and small e-commerce projects with fast iteration and clean UI delivery.",
  },
];

const skills = [
  {
    title: "Frontend",
    items: "Next.js, React, TypeScript, State Management, Accessibility",
  },
  {
    title: "Architecture",
    items: "Design Systems, Product UI, Performance, Scalable UI, DX",
  },
  {
    title: "Tooling",
    items: "Storybook, Jest, Git, Node.js, CI/CD",
  },
];

const education =
  "Technical and Economical College Brno — Computer Systems and Programming (2017–2021)";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10.5,
    fontFamily: "Arial",
    color: "#0f172a",
    lineHeight: 1.35,
  },
  header: {
    marginBottom: 16,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    maxWidth: 360,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
    objectFit: "cover",
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: -0.3,
  },
  title: {
    fontSize: 8.5,
    color: "#475569",
    marginTop: 6,
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
  summary: {
    fontSize: 10,
    color: "#1f2937",
    marginTop: 8,
    maxWidth: 420,
  },
  contact: {
    fontSize: 9.6,
    color: "#334155",
    textAlign: "right",
    alignItems: "flex-end",
    width: 180,
    marginTop: 0,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    gap: 6,
    marginBottom: 5,
  },
  contactBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#e0ecff",
    alignItems: "center",
    justifyContent: "center",
  },
  contactBadgeText: {
    fontSize: 8,
    color: "#1d4ed8",
    fontWeight: 700,
  },
  contactItem: {
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 12,
  },
  grid: {
    flexDirection: "row",
    gap: 24,
  },
  main: {
    flex: 1.65,
  },
  side: {
    flex: 0.9,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.8,
    color: "#64748b",
    marginRight: 8,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  sectionSpacer: {
    marginTop: 12,
  },
  item: {
    marginBottom: 8,
  },
  itemTitleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
  },
  itemTitle: {
    fontSize: 10.6,
    fontWeight: 600,
  },
  itemMeta: {
    fontSize: 9.2,
    color: "#64748b",
    marginLeft: 6,
  },
  itemText: {
    marginTop: 2,
    color: "#1f2937",
  },
  itemMuted: {
    marginTop: 2,
    fontSize: 9.2,
    color: "#64748b",
  },
  sidebarCard: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    padding: 10,
  },
});

const CVDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <Image src={avatarSrc} style={styles.avatar} />
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.title}>{profile.title}</Text>
            </View>
            <View style={styles.contact}>
              <View style={styles.contactRow}>
                <View style={styles.contactBadge}>
                  <Text style={styles.contactBadgeText}>@</Text>
                </View>
                <Text>{profile.email}</Text>
              </View>
              <View style={styles.contactRow}>
                <View style={styles.contactBadge}>
                  <Text style={styles.contactBadgeText}>W</Text>
                </View>
                <Text>{profile.website}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.grid}>
          <View style={styles.main}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Selected Projects</Text>
              <View style={styles.sectionLine} />
            </View>
            {projects.map((project) => (
              <View key={project.name} style={styles.item}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{project.name}</Text>
                  <Text style={styles.itemMeta}>{project.company}</Text>
                </View>
                <Text style={styles.itemText}>{project.detail}</Text>
                <Text style={styles.itemMuted}>{project.role}</Text>
                <Text style={styles.itemMuted}>{project.tags}</Text>
              </View>
            ))}

            <View style={[styles.sectionHeader, styles.sectionSpacer]}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <View style={styles.sectionLine} />
            </View>
            {experience.map((role) => (
              <View key={role.company} style={styles.item}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{role.company}</Text>
                  <Text style={styles.itemMeta}>{role.role}</Text>
                  <Text style={styles.itemMeta}>{role.period}</Text>
                </View>
                <Text style={styles.itemText}>{role.detail}</Text>
              </View>
            ))}
          </View>

          <View style={styles.side}>
            <View style={styles.sidebarCard}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.sectionLine} />
              </View>
              {skills.map((group) => (
                <View key={group.title} style={styles.item}>
                  <Text style={styles.itemTitle}>{group.title}</Text>
                  <Text style={styles.itemMuted}>{group.items}</Text>
                </View>
              ))}
            </View>

            <View style={[styles.sidebarCard, styles.sectionSpacer]}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.sectionLine} />
              </View>
              <Text style={styles.itemText}>{education}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
