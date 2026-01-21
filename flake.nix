{
  description = "devShell";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { nixpkgs, ... }:
  let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in
  {
    devShell.${system} = pkgs.mkShell {
      name = "PHP82_and_NodeJS_LTS";
      buildInputs = with pkgs; [
        php82
        php82Packages.composer
        nodePackages.nodejs
      ];
      shellHook = ''
        if command -v fish >/dev/null 2>&1; then
          exec fish
        elif command -v zsh >/dev/null 2>&1; then
          exec zsh
        fi
      '';
    };
  };
}
