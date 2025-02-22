import React from "react";
import FusionPage from "./FusionPage";
import { gameInfo } from "@/config/game.config";
import { config } from "@/config";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Pokémon Infinite Fusion Calculator",
  description: `Discover and create unique Pokémon fusions with the Infinite Fusion Calculator. Explore over ${gameInfo.autoGeneratedSprites.toLocaleString()} auto-generated fusion combinations and ${gameInfo.totalCustomSprites} custom fusions featuring stunning artwork from ${gameInfo.totalArtists.toLocaleString()} artists worldwide.`,
  openGraph: {
    title: "Pokémon Infinite Fusion Calculator",
    description: `Combine Pokémon heads and bodies to generate amazing fusions. Access a collection of over ${gameInfo.autoGeneratedSprites.toLocaleString()} fusion options, ${gameInfo.totalCustomSprites} custom sprites, and contributions from an active community of ${gameInfo.totalArtists.toLocaleString()} artists.`,
    url: `${config.site.mainURL}`,
    siteName: config.site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/infinite-fusion-calculator.png",
        width: 1920,
        height: 1080,
        alt: "Preview of Pokémon Infinite Fusion Calculator interface showing fusion examples.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokémon Infinite Fusion Calculator",
    description: `Generate custom Pokémon fusions by mixing heads and bodies. Over ${gameInfo.totalCustomSprites} unique sprites and community-driven artwork available to explore.`,
    images: ["/images/og/infinite-fusion-calculator.png"],
  },
  alternates: {
    canonical: `${config.site.mainURL}`,
  },
};

const changeLogs = [
  {
    date: "2025-02-21",
    changes: [
      {
        title: "New Feature: Dialog for Custom Dex Entries",
        description:
          "Added a new dialog box that allows users to view and edit custom Pokédex entries for fusions.",
      },
    ],
  },
  {
    date: "2025-02-19",
    changes: [
      {
        title: "UI Improvements & Moves Table Enhancements",
        description:
          "Refactored FusionResult structure for better organization on larger screens. Improved the Moves Table to ensure level-up moves display correctly and added responsive optimizations for mobile and desktop views.",
      },
      {
        title: "Styling Fixes",
        description:
          "Fixed minor inconsistencies in text alignment, spacing, and hover effects for better UI consistency across components like FusionImage and MovesTable.",
      },
    ],
  },
  {
    date: "2025-02-10",
    changes: [
      {
        title: "New Feature: Shiny Sprite Drawer",
        description:
          "Implemented a comprehensive Shiny Sprite Drawer that allows users to explore different shiny variations of Pokémon fusions. The drawer provides three distinct shiny modes: Head Shiny, Body Shiny, and All Shiny, giving users unprecedented customization options for their fusion sprites.",
      },
    ],
  },
  {
    date: "2025-02-03",
    changes: [
      {
        title: "New Feature: All Sprites Drawer",
        description:
          "Introduced a new drawer component that displays all available sprites for a fusion, including custom and auto-generated variants. This feature enhances the exploration experience for users.",
      },
    ],
  },
];

function Page() {
  return (
    <Card className="space-y-4 grid-lines bg-slate-50 dark:bg-slate-900 p-1 md:p-4">
      <CardHeader className="p-1 px-2 text-center">
        <h1 className="text-2xl">Pokémon Infinite Fusion Calculator</h1>
        <CardDescription className="mx-auto max-w-screen-xl text-muted-foreground text-sm">
          Mix and match Pokémon to view unique custom and auto-generated sprite
          fusions from a vast database, crafted by{" "}
          {gameInfo.totalArtists.toLocaleString()}+ talented artists.
        </CardDescription>
      </CardHeader>

      {/* Main Fusion Calculation Section */}
      <FusionPage />

      <article>
       
      <Card className="mx-auto max-w-screen-md">
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={2}>
            <h2 className="mx-auto font-bold text-xl text-center">Game Stats (v6.4)</h2>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Total Base Pokémon</TableCell>
          <TableCell className="text-right">501</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Fusions</TableCell>
          <TableCell className="text-right">2,51,001</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fusions with Custom Sprites</TableCell>
          <TableCell className="text-right">1,30,816</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Custom Sprites</TableCell>
          <TableCell className="text-right">1,80,662</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Auto-Generated Sprites</TableCell>
          <TableCell className="text-right">2,51,001</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Custom Dex Entries</TableCell>
          <TableCell className="text-right">16,446</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Contributing Artists</TableCell>
          <TableCell className="text-right">7,060</TableCell>
        </TableRow>
      </TableBody>
    </Table>
      </Card>
  <Separator className="my-6" />
  <div className="space-y-4 dark:prose-invert px-2 md:px-8 pt-8 min-w-full prose">
    <p>
      The Pokémon Infinite Fusion Calculator allows you to combine two Pokémon 
      into a unique fusion. You can pick one Pokémon as the "Head" and another as 
      the "Body," and instantly see the resulting fusion. The tool also lets you 
      swap their positions to view different fusion variations.
    </p>

    <p>
      Each fusion comes with a custom sprite, stats, abilities, and type matchups. 
      If a fusion has a special Pokédex entry, a small blue book icon will appear 
      above its name. Clicking on the sprite or its name opens a detailed page 
      where you can explore its Pokédex entry, alternative sprites, evolutions, 
      moves, and more.
    </p>

    <p>
      If an artist has created a custom sprite for the fusion, their name will be 
      displayed on the image. Otherwise, the calculator generates an automatic 
      sprite labeled as "Autogen."
    </p>

    <p>
      Below the sprite, you can see the fusion’s full stats, including HP, Attack, 
      Defense, Special Attack, Special Defense, and Speed. Both Normal and Hidden 
      Abilities are listed. Hover over or click the "i" icon next to an ability to 
      view its effect.
    </p>

    <p>
      The fusion’s strengths and weaknesses against different Pokémon types are also 
      displayed. These are shown as multipliers: x2 (super effective), x1 (normal), 
      x0.5 (resistant), and x0 (immune). This helps you understand how your fusion 
      will perform in battle.
    </p>

    <p>
      You can now preview all shiny forms of a fusion using the Shiny Dialog. This 
      feature allows you to view different shiny versions, including separate shiny 
      heads, bodies, and full shiny sprites.
    </p>

    <p>
      Additionally, the All Sprites Dialog lets you browse all available sprite 
      variations for a fusion. You can easily switch between custom and autogenerated 
      sprites to find your favorite look.
    </p>
  </div>
</article>


      <Separator />
      {/* Changelogs */}
      <section className="mt-8">
        <h2 className="mb-4 font-bold text-xl text-center">Change Logs</h2>
        <div className="space-y-8">
          {changeLogs.map((log, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 shadow p-6 rounded-lg"
            >
              <h3 className="mb-4 font-semibold">{log.date}</h3>
              <div className="space-y-4">
                {log.changes.map((change, changeIndex) => (
                  <div key={changeIndex}>
                    <h4 className="mb-2 font-medium text-indigo-600 dark:text-indigo-400 text-lg">
                      {change.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {change.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
}

export default Page;
