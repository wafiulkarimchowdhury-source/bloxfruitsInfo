import React from 'react';
import { X, Clock, MapPin, Compass, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

interface ObtainmentHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ObtainmentHelperModal: React.FC<ObtainmentHelperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="obtainment-helper-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="obtainment-helper-container"
        className="relative w-full max-w-2xl my-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                Blox Fruits Secrets & Obtainment Master Reference
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Legendary Sword Dealer Spawns • Sea Progression • Boss Puzzles
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Section 1: Legendary Sword Dealer */}
          <div className="rounded-xl bg-slate-950/70 border border-amber-500/30 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
              <Clock className="w-4 h-4 text-amber-400" />
              Legendary Sword Dealer (Shisui, Saddi, Wando)
            </div>
            <p className="text-slate-300 leading-relaxed">
              The Legendary Sword Dealer spawns in the <strong>Second Sea</strong> every 4 to 6 hours after a server starts. He sells Shisui, Saddi, or Wando for <strong>$2,000,000 Beli</strong> each. Once spawned, he remains for only <strong>15 minutes</strong> before vanishing.
            </p>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-semibold text-slate-200 block text-xs">
                Cafe Manager Dialogue Decoder (Talk to Manager in Cafe):
              </span>
              <ul className="space-y-1 text-slate-300 font-mono text-[11px]">
                <li>• <span className="text-rose-400">"Are you crazy? It's still too early for you..."</span> → Server was just restarted (wait 3+ hours).</li>
                <li>• <span className="text-amber-400">"I think he'll be here soon..."</span> → Spawning in roughly 15-30 minutes!</li>
                <li>• <span className="text-emerald-400 font-bold">"Some pirates said they saw him on a nearby island..."</span> → <strong>SPAWNED NOW! Search immediately!</strong></li>
                <li>• <span className="text-slate-500">"He just left..."</span> → Missed the window; will respawn in 4-6 hours.</li>
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-semibold text-slate-200 block text-xs">
                The 7 Known Spawn Locations:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                <span>1. Colosseum arches (inside underground canal)</span>
                <span>2. Green Zone (tip of the beanstalk leaves)</span>
                <span>3. Green Zone (behind giant stone rocks)</span>
                <span>4. Kingdom of Rose (behind Factory rock)</span>
                <span>5. Graveyard Island (very top of the high central pillar)</span>
                <span>6. Usopp's Island (inside the small house)</span>
                <span>7. Floating Island / Remote Rocks</span>
              </div>
            </div>
          </div>

          {/* Section 2: Sea Progression Requirements */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-sky-300">
              <Compass className="w-4 h-4 text-sky-400" />
              Sea Progression Level Gates
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="font-bold text-slate-100 text-xs block">
                  First Sea → Second Sea (Level 700)
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  1. Reach Level 700 in First Sea.<br />
                  2. Talk to Military Detective in Prison.<br />
                  3. Defeat Ice Admiral inside the Frozen Village cave.<br />
                  4. Talk to Captain Experienced in Middle Town docks to sail to Second Sea.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                <span className="font-bold text-slate-100 text-xs block">
                  Second Sea → Third Sea (Level 1500)
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  1. Reach Level 1500.<br />
                  2. Complete the Colosseum Bartilo Quest.<br />
                  3. Defeat Don Swan inside the Rose Mansion.<br />
                  4. Talk to King Red Head in Colosseum and defeat Rip_Indra to travel to Third Sea.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Essential Endgame Boss Checklist */}
          <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-purple-300">
              <ShieldAlert className="w-4 h-4 text-purple-400" />
              Guaranteed Drop Hacks & Pro Mechanics
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-300 pl-3 list-disc">
              <li>
                <strong>Cake Prince / Dough King:</strong> Slaying Dough King guarantees Pale Scarf (100% on first kill) + 15% Spikey Trident drop chance.
              </li>
              <li>
                <strong>Rip_Indra:</strong> Guarantees Valkyrie Helm (100% on first kill). Keep him alive to open the Tushita holy torch puzzle!
              </li>
              <li>
                <strong>Soul Guitar:</strong> Requires a Full Moon server. Only pray at the grave in Haunted Castle when the moon is 100% full.
              </li>
              <li>
                <strong>Buddha Raid Awakening:</strong> You only need to awaken the first skill (Z: Shift) for 500 Fragments to gain 50% damage reduction and massive sword range.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
