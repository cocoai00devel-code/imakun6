{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}

module Main where

import Web.Scotty
import Data.Aeson (object, (.=), FromJSON)
import GHC.Generics (Generic)
import Control.Monad.IO.Class (liftIO)

data CheckRequest = CheckRequest { userId :: String, cmd :: String } deriving (Generic)
instance FromJSON CheckRequest

main :: IO ()
main = scotty 8000 $ do
    post "/check" $ do
        req <- jsonData :: ActionM CheckRequest
        if cmd req == "INIT_SECURE_LIVE"
            then do
                liftIO $ putStrLn "⚖️ 【当裁判所】policy-server判決趣旨に従って正規に強制開錠の許可（トークン）を発行する。"
                json $ object ["status" .= ("OK" :: String), "token" .= ("HS-PROOF-99" :: String)]
            else do
                json $ object ["error" .= ("REJECTED" :: String)]